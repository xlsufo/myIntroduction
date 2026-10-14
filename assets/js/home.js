
const profile = window.SITE_PROFILE;
const projects = window.SITE_PROJECTS || [];
const { initTheme } = window.SiteTheme;
const { initReveal, rootPath, el } = window.SiteUtils;

initTheme();
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('heroName').textContent = profile.name;
document.getElementById('heroRole').textContent = profile.role;
document.getElementById('heroSummary').textContent = profile.summary[0];

document.getElementById('heroMeta').append(
  chip(profile.title),
  chip(profile.location),
  chip('C++ · Python · Matlab · Qt')
);

const summary = document.getElementById('profileSummary');
profile.summary.forEach((text) => summary.append(el('p', '', text)));

const capabilityWrap = document.getElementById('capabilities');
profile.capabilities.forEach((item) => {
  const card = el('article', 'capability-card');
  card.append(el('strong', '', item.title), el('span', '', item.text));
  capabilityWrap.append(card);
});

const projectGrid = document.getElementById('projectGrid');
projects.forEach((project, index) => {
  const card = el('article', `project-card reveal${index === 0 ? ' featured' : ''}`);
  const media = el('div', `project-media${project.cardMedia ? '' : ' empty'}`);
  if (project.cardMedia) {
    const img = document.createElement('img');
    img.src = rootPath(project.cardMedia);
    img.alt = `${project.shortTitle}项目图片`;
    img.loading = index < 2 ? 'eager' : 'lazy';
    media.append(img);
  } else {
    media.append(el('span', '', 'MEDIA TO BE ADDED'));
  }

  const body = el('div', 'project-body');
  const kicker = el('div', 'project-kicker');
  kicker.append(el('span', '', project.category), el('span', '', project.period));
  body.append(kicker, el('h3', '', project.shortTitle), el('p', '', project.summary));

  const tags = el('div', 'project-tags');
  project.tags.slice(0, 6).forEach((tag) => tags.append(el('span', '', tag)));
  body.append(tags);

  const link = el('a', 'project-link', '查看项目详情');
  link.href = rootPath(`projects/${project.id}/index.html`);
  body.append(link);

  card.append(media, body);
  projectGrid.append(card);
});

const publications = document.getElementById('publicationList');
profile.publications.forEach((item) => {
  const li = document.createElement('li');
  li.innerHTML = item;
  publications.append(li);
});

const patents = document.getElementById('patentList');
profile.patents.forEach((item) => patents.append(el('li', '', item)));

const timeline = document.getElementById('educationTimeline');
profile.education.forEach((item) => {
  const article = el('article', 'timeline-item reveal');
  article.append(
    el('div', 'timeline-period', item.period),
    el('h3', '', item.school),
    el('div', 'timeline-degree', item.degree),
    el('p', '', item.detail)
  );
  timeline.append(article);
});

const awards = document.getElementById('awardList');
profile.awards.forEach((item) => awards.append(el('li', '', item)));

const contactActions = document.getElementById('contactActions');
const mail = el('a', 'button primary', profile.email);
mail.href = `mailto:${profile.email}`;
const phone = el('a', 'button ghost', profile.phone);
phone.href = `tel:${profile.phone.replace(/[^+\d]/g, '')}`;
const wechat = el('button', 'button ghost', '微信');
wechat.type = 'button';
wechat.dataset.qr = 'assets/media/contact/wechat.png';
wechat.dataset.qrTitle = '微信';
const qq = el('button', 'button ghost', 'QQ');
qq.type = 'button';
qq.dataset.qr = 'assets/media/contact/qq.png';
qq.dataset.qrTitle = 'QQ';
contactActions.append(mail, phone, wechat, qq);

const dialog = document.getElementById('qrDialog');
const qrImage = document.getElementById('qrImage');
const qrTitle = document.getElementById('qrTitle');
document.querySelectorAll('[data-qr]').forEach((button) => {
  button.addEventListener('click', () => {
    qrImage.src = rootPath(button.dataset.qr);
    qrTitle.textContent = button.dataset.qrTitle;
    dialog.showModal();
  });
});
document.querySelector('[data-dialog-close]').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

initReveal();

function chip(text) {
  return el('span', '', text);
}


const projects = window.SITE_PROJECTS || [];
const projectMap = window.SITE_PROJECT_MAP || {};
const { initTheme } = window.SiteTheme;
const { rootPath, el } = window.SiteUtils;

initTheme();
document.getElementById('year').textContent = new Date().getFullYear();

const projectId = document.body.dataset.project;
const project = projectMap[projectId];
const app = document.getElementById('projectApp');

if (!project) {
  app.append(el('section', 'shell section', '未找到该项目。'));
} else {
  document.title = `${project.shortTitle} · 许立松`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', project.summary);

  app.append(renderHero(project));
  app.append(renderOverview(project));
  project.sections.forEach((section) => app.append(renderSection(section)));
  app.append(renderProjectNavigation(project));
  initLightbox();
}

function renderHero(item) {
  const section = el('section', 'project-hero shell');
  const back = el('a', 'project-back', '← 返回首页 / 项目列表');
  back.href = rootPath('index.html#projects');

  const grid = el('div', 'project-hero-grid');
  const copy = el('div');
  copy.append(
    el('p', 'eyebrow', item.category.toUpperCase()),
    el('h1', '', item.title),
    el('p', 'project-lede', item.summary)
  );
  const tags = el('div', 'project-tags');
  item.tags.forEach((tag) => tags.append(el('span', '', tag)));
  copy.append(tags);

  const meta = el('aside', 'project-meta-card');
  meta.append(metaRow('时间', item.period), metaRow('角色', item.role));
  if (item.partner) meta.append(metaRow('合作单位', item.partner));
  meta.append(metaRow('项目编号', String(item.order).padStart(2, '0')));

  grid.append(copy, meta);
  section.append(back, grid);
  return section;
}

function renderOverview(item) {
  const wrap = el('section', 'project-overview shell');
  const tasks = el('article', 'overview-card');
  tasks.append(el('h2', '', '主要工作'));
  const taskList = document.createElement('ul');
  item.highlights.forEach((text) => taskList.append(el('li', '', text)));
  tasks.append(taskList);

  const results = el('article', 'overview-card');
  results.append(el('h2', '', '结果 / 输出'));
  const resultList = document.createElement('ul');
  item.results.forEach((text) => resultList.append(el('li', '', text)));
  results.append(resultList);
  wrap.append(tasks, results);
  return wrap;
}

function renderSection(sectionData) {
  const section = el('section', 'project-section shell');
  const side = el('div');
  side.append(el('h2', '', sectionData.title));
  const content = el('div', 'project-section-copy');
  (sectionData.paragraphs || []).forEach((text) => content.append(el('p', '', text)));

  if (sectionData.links?.length) {
    const links = el('div', 'section-links');
    sectionData.links.forEach((item) => {
      const a = el('a', 'button ghost', `${item.label} ↗`);
      a.href = item.href;
      a.target = '_blank';
      a.rel = 'noreferrer';
      links.append(a);
    });
    content.append(links);
  }

  if (sectionData.media?.length) content.append(renderMedia(sectionData.media));
  section.append(side, content);
  return section;
}

function renderMedia(mediaItems) {
  const grid = el('div', 'media-grid');
  mediaItems.forEach((item, index) => {
    const figure = el('figure', `media-item${item.wide ? ' wide' : ''}`);
    const kind = item.kind || inferKind(item.src);

    if (kind === 'video') {
      const video = document.createElement('video');
      video.src = rootPath(item.src);
      video.controls = true;
      video.preload = 'metadata';
      video.playsInline = true;
      figure.append(video);
    } else {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.lightbox = rootPath(item.src);
      button.dataset.alt = item.alt || item.caption || `项目媒体 ${index + 1}`;
      const img = document.createElement('img');
      img.src = rootPath(item.src);
      img.alt = item.alt || item.caption || '';
      img.loading = 'lazy';
      button.append(img);
      figure.append(button);
    }

    if (item.caption) figure.append(el('figcaption', '', item.caption));
    grid.append(figure);
  });
  return grid;
}

function renderProjectNavigation(item) {
  const index = projects.findIndex((project) => project.id === item.id);
  const prev = projects[index - 1];
  const next = projects[index + 1];
  const nav = el('nav', 'next-project shell');
  if (prev) nav.append(projectNavLink(prev, '上一个项目'));
  if (next) nav.append(projectNavLink(next, '下一个项目'));
  return nav;
}

function projectNavLink(item, label) {
  const a = document.createElement('a');
  a.href = rootPath(`projects/${item.id}/index.html`);
  a.append(el('small', '', label), el('strong', '', item.shortTitle));
  return a;
}

function metaRow(label, value) {
  const row = el('div', 'project-meta-row');
  row.append(el('span', '', label), el('span', '', value));
  return row;
}

function inferKind(src) {
  return /\.(mp4|webm|mov)$/i.test(src) ? 'video' : 'image';
}

function initLightbox() {
  const dialog = document.getElementById('lightbox');
  const image = document.getElementById('lightboxImage');
  document.querySelectorAll('[data-lightbox]').forEach((button) => {
    button.addEventListener('click', () => {
      image.src = button.dataset.lightbox;
      image.alt = button.dataset.alt || '';
      dialog.showModal();
    });
  });
  document.querySelector('[data-lightbox-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}

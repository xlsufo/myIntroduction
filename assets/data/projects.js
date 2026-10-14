window.SITE_PROJECTS = [
  {
    id: 'ssm-soft-robot',
    order: 1,
    title: '基于谱子流形降阶的软体机械臂控制',
    shortTitle: '谱子流形降阶控制',
    category: 'Soft Robotics · Reduced-order Control',
    period: '2025.02 — 2025.08',
    role: '主要完成人',
    partner: '南方科技大学',
    summary: '面向软体机器人高维非线性模型难以实时控制的问题，构建谱子流形降阶、MPC 与数据驱动方法结合的实时控制框架，并完成样机与测控软件开发。',
    tags: ['SSM', 'MPC', 'CasADi', 'FEM', 'Neural Network', 'Qt6', 'ZeroMQ'],
    highlights: [
      '基于有限元模型构建连续体机械臂非线性动力学模型，求解方程驱动的谱子流形降阶动力学。',
      '基于降阶模型设计 MPC 轨迹跟踪控制器，并使用 CasADi 实现在线优化。',
      '结合神经网络建立全阶系统与降阶系统之间的力映射关系，进行降阶模型下的力控验证。',
      '搭建连续体机械臂试验样机，完成 Qt6 + ZeroMQ + Protobuf 的底层驱动、界面与消息总线架构。'
    ],
    results: [
      '将几万自由度有限元模型降低至 4 维，满足实时控制的计算需求。',
      '数据驱动自治降阶模型预测精度达到 95%。',
      '样机轨迹跟踪误差控制在 5 mm 以内。'
    ],
    cardMedia: 'assets/media/projects/ssm-soft-robot/prototype-control.jpg',
    sections: [
      {
        title: '问题与技术路线',
        paragraphs: [
          '连续体 / 软体机器人高保真有限元模型通常具有极高自由度，直接用于在线 MPC 会受到计算量限制。项目采用谱子流形作为非线性降阶流形，在保留主要非线性动力学特征的同时压缩状态维度。',
          '控制链路由高保真模型、降阶动力学、力映射、MPC 优化器和样机测控系统构成，使模型研究能够直接进入在线实验。'
        ]
      },
      {
        title: '软件与实验平台',
        paragraphs: ['负责底层驱动、上位机与消息总线架构设计及核心代码编写。界面与驱动进程通过 ZeroMQ 交换消息，便于控制算法与硬件模块解耦。'],
        media: [
          { src: 'assets/media/projects/ssm-soft-robot/driver-ui.png', alt: '连续体机械臂驱动软件界面', caption: '驱动与状态监测界面' },
          { src: 'assets/media/projects/ssm-soft-robot/motor-ui.png', alt: '电机配置界面', caption: '电机配置与通信状态界面' },
          { src: 'assets/media/projects/ssm-soft-robot/prototype-control.jpg', alt: '连续体机械臂样机与控制界面', caption: '样机控制与轨迹验证' }
        ]
      }
    ]
  },
  {
    id: 'space-continuum',
    order: 2,
    title: '某空间连续体机械臂项目',
    shortTitle: '空间连续体机械臂',
    category: 'Continuum Robotics · Sensing & Control',
    period: '2021.05 — 2024.12',
    role: '主要完成人',
    partner: '航天八院、上海大学',
    summary: '面向空间非结构环境中的灵巧作业需求，开展绳驱连续体机械臂样机研发，覆盖结构设计、Cosserat 建模、形态感知、仿真平台、控制算法和嵌入式部署。',
    tags: ['Cosserat Rod', 'Multi-IMU', 'ESKF', 'B-Spline', 'Koopman', 'MPC', 'Jetson Orin', 'Qt5', 'MQTT'],
    highlights: [
      '负责绳驱连续体机械臂臂身与驱动机构设计，完成结构参数计算、驱动选型与力学性能分析。',
      '在 Jetson Orin 部署机器人测控系统，设计 Qt5 + MQTT 分层架构，实现驱动、控制、规划与交互层协同。',
      '基于 Cosserat 杆理论建立动力学模型，并搭建 RecurDyn / SOFA 等仿真验证环境。',
      '搭建分布式 IMU 测量系统，采用 ESKF 与 so(3) 空间 B 样条进行形态实时重构。',
      '基于形态反馈构建实时驱动—任务空间雅可比，结合约束二次规划实现任务空间闭环控制。',
      '探索 Koopman 数据驱动建模、谱子流形降阶与基于 ToF / 人工势场的在线避障。'
    ],
    results: [
      '形态预测误差控制在臂长的 5% 以内。',
      '基于 PID / Koopman 的样机控制定位精度达到 20 mm。',
      '杠杆臂效应补偿实验中，末端轨迹 RMSE 降至 4.78 mm（机械臂总长的 1.83%）。'
    ],
    cardMedia: 'assets/media/projects/space-continuum/three-segment-prototype.jpg',
    sections: [
      {
        title: '样机与驱动系统',
        paragraphs: [
          '项目从两段臂遥控原型开始迭代，之后完成中心杆构型连续体机械臂样机。驱动箱提供 15 路驱动通道，可扩展支持 5 段机械臂。',
          '结构设计与控制算法同步迭代，使机械结构、传感布置、驱动能力和控制可实现性能够在同一工程闭环中权衡。'
        ],
        media: [
          { src: 'assets/media/projects/space-continuum/early-prototype.jpg', alt: '早期连续体机械臂样机', caption: '早期两段臂样机' },
          { src: 'assets/media/projects/space-continuum/three-segment-prototype.jpg', alt: '三段连续体机械臂样机', caption: '中心杆构型三段样机' }
        ]
      },
      {
        title: 'Cosserat 建模与仿真',
        paragraphs: [
          '采用 Cosserat 杆理论描述连续体机械臂的大变形动力学，并围绕实时动力学方法开展复现与扩展。',
          '为了降低实物调试成本，分别建立 RecurDyn 与 SOFA 模型，并与 Matlab 联合验证拉力、形态补偿和末端控制策略。'
        ],
        media: [
          { src: 'assets/media/projects/space-continuum/cosserat-model.jpg', alt: 'Cosserat 杆模型结果', caption: 'Cosserat 杆建模结果' },
          { src: 'assets/media/projects/space-continuum/recurdyn-model.jpg', alt: 'RecurDyn 连续体机械臂模型', caption: 'RecurDyn 联合仿真模型' },
          { src: 'assets/media/projects/space-continuum/trajectory-result.jpg', alt: '连续体机械臂轨迹仿真', caption: '末端轨迹控制仿真' },
          { src: 'assets/media/projects/space-continuum/sofa-model.jpg', alt: 'SOFA 仿真模型', caption: 'SOFA Framework 仿真模型' }
        ]
      },
      {
        title: '分布式 IMU 形态感知',
        paragraphs: [
          '针对连续体机械臂缺少传统关节编码器的问题，利用分布式 IMU 获取离散姿态，并通过 ESKF 抑制噪声和漂移。',
          '在 so(3) 空间对离散姿态对应的切向量进行 B 样条插值，再结合 Cosserat 几何关系积分获得整臂形态。对大负载引起的非恒曲率变形，该方法相较分段常曲率方法表现出更好的鲁棒性。'
        ],
        media: [
          { src: 'assets/media/projects/space-continuum/shape-estimation-test.jpg', alt: '形态估计实验', caption: '连续体机械臂形态估计实验' },
          { src: 'assets/media/projects/space-continuum/load-test.jpg', alt: '不同负载形态试验', caption: '500 g — 650 g 静态负载试验' },
          { src: 'assets/media/projects/space-continuum/hyper-redundant-structure.png', alt: '超冗余机械臂结构', caption: '超冗余机械臂结构与运动学示意' },
          { src: 'assets/media/projects/space-continuum/imu-experimental-setup.png', alt: '多 IMU 实验平台', caption: '多 IMU 杠杆臂效应实验平台' }
        ]
      },
      {
        title: '测控软件与开源贡献',
        paragraphs: ['测控软件按驱动、控制、规划、交互分层，使用 MQTT 作为消息总线；同时在学习 Cosserat 实时动力学过程中向相关开源项目贡献了代码。'],
        media: [
          { src: 'assets/media/projects/space-continuum/software-dashboard.png', alt: '连续体机械臂测控软件', caption: '多驱动通道测控界面' },
          { src: 'assets/media/projects/space-continuum/software-robot-view.png', alt: '连续体机械臂可视化界面', caption: '机器人状态可视化界面' },
          { src: 'assets/media/projects/space-continuum/github-contribution.png', alt: 'GitHub 代码贡献记录', caption: 'Cosserat 示例项目代码贡献记录' }
        ],
        links: [
          { label: 'ContinuumRobotExamples · GitHub', href: 'https://github.com/JohnDTill/ContinuumRobotExamples' }
        ]
      }
    ]
  },
  {
    id: 'live-line-snake',
    order: 3,
    title: '带电作业蛇形机械臂',
    shortTitle: '带电作业蛇形机械臂',
    category: 'Hyper-redundant Manipulator · Field Robotics',
    period: '2021.12 — 2022.12',
    role: '主要负责人',
    partner: '湖南省电科院',
    summary: '面向配网带电作业中狭窄空间穿越和末端作业需求，研发绳驱蛇形机械臂本体、驱动系统、末端执行机构及配套软件系统。',
    tags: ['Cable-driven', 'FABRIK', 'Screw Theory', 'Multi-IMU', 'System Integration'],
    highlights: [
      '负责蛇形机械臂本体、驱动系统、末端执行机构和软件系统架构设计。',
      '协调机械、传感和控制模块联调，支撑带电作业场景验证。',
      '基于 FABRIK 实现逆运动学解算，基于旋量法进行动力学建模。',
      '结合分布式 IMU 形态感知实现机械臂姿态估计与控制。'
    ],
    results: ['完成面向带电作业场景的蛇形机械臂系统集成与验证。'],
    cardMedia: null,
    sections: [
      {
        title: '系统职责',
        paragraphs: [
          '该项目的难点不只在单一算法，而在机械本体、绳驱执行、末端工具、形态感知与软件控制的系统协同。项目中承担总体方案与跨模块联调工作。',
        ]
      },
      {
        title: '算法与控制',
        paragraphs: ['逆运动学采用 FABRIK 迭代求解以适配高冗余构型，动力学部分使用旋量法表达链式刚体关系，并将分布式 IMU 作为形态反馈来源。']
      }
    ]
  },
  {
    id: 'ballistic-station',
    order: 4,
    title: '弹道滤波地面站',
    shortTitle: '弹道滤波地面站',
    category: 'C++ / Qt · Real-time Visualization',
    period: '2020.12 — 2021.12',
    role: '唯一完成人',
    partner: '',
    summary: '构建集弹道仿真、雷达数据接收、滤波处理和可视化于一体的综合系统，用于弹道轨迹分析与实时监控。',
    tags: ['C++', 'Qt', 'QML', 'Radar', 'Filtering', 'Visualization'],
    highlights: [
      '基于 Qt / QML 开发地面站上层界面，完成布局、交互、轨迹显示和数据可视化。',
      '使用 C++ 开发后台数据处理模块，集成雷达数据实时接收、弹道轨迹仿真和滤波算法。'
    ],
    results: [
      '操作界面能够实时展示弹道仿真轨迹及滤波后的雷达数据。',
      '项目测试记录显示，弹道仿真结果与实际轨迹偏差控制在 5% 以内。'
    ],
    cardMedia: 'assets/media/projects/ballistic-station/filter-ui.png',
    sections: [
      {
        title: '软件架构',
        paragraphs: ['前端使用 QML 负责交互和可视化，C++ 后端负责高频数据输入、弹道仿真与滤波计算。该项目形成了后续机器人测控软件中“界面与实时计算解耦”的工程经验。'],
        media: [
          { src: 'assets/media/projects/ballistic-station/filter-ui.png', alt: '弹道滤波地面站界面', caption: '弹道滤波地面站操作与数据界面' }
        ]
      }
    ]
  },
  {
    id: 'tiltrotor-uav',
    order: 5,
    title: '倾转旋翼验证机总体设计及项目论证',
    shortTitle: '倾转旋翼验证机总体设计',
    category: 'UAV · System Design',
    period: '硕士阶段',
    role: '项目主要参与者',
    partner: '某研究所',
    summary: '完成倾转旋翼验证机从总体方案、旋翼与桨叶设计、气动外形到结构强度、动力系统和试验论证的全流程研发。',
    tags: ['Tiltrotor', 'Aerodynamics', 'Structure', 'ANSYS', 'Prototype', 'System Engineering'],
    highlights: [
      '负责验证机总体方案设计，包括倾转旋翼建模、桨叶设计、气动外形、结构强度校核和动力系统设计。',
      '参与风洞试验与结构载荷测试，依据试验数据迭代设计。',
      '参与技术可行性与成本论证，推动项目由验证机向正式产品转化。'
    ],
    results: [
      '验证机最大起飞重量达到 25 kg，完成倾转过渡验证。',
      '项目后续形成正式产品并实现小批量生产，用于低空侦察与物资运输场景测试。'
    ],
    cardMedia: 'assets/media/projects/tiltrotor-uav/product.png',
    sections: [
      {
        title: '从概念方案到样机',
        paragraphs: ['项目工作覆盖总体布局、气动、结构和动力系统，不仅关注单项性能，也需要对重量、强度、倾转机构、旋翼效率与任务需求进行系统权衡。'],
        media: [
          { src: 'assets/media/projects/tiltrotor-uav/concept-model.jpg', alt: '倾转旋翼概念模型', caption: '倾转旋翼总体方案 / 三维模型' },
          { src: 'assets/media/projects/tiltrotor-uav/prototype.jpg', alt: '倾转旋翼样机', caption: '样机结构与装配' },
          { src: 'assets/media/projects/tiltrotor-uav/wind-tunnel.jpg', alt: '倾转旋翼风洞实验', caption: '风洞试验现场' },
          { src: 'assets/media/projects/tiltrotor-uav/product.png', alt: '倾转旋翼正式产品', caption: '后续形成的实际产品' }
        ]
      }
    ]
  },
  {
    id: 'flightgear-simulation',
    order: 6,
    title: 'Matlab 与 FlightGear 联合可视化仿真',
    shortTitle: 'FlightGear 联合仿真',
    category: 'Simulation · Embedded HIL',
    period: '硕士阶段',
    role: '主要开发',
    partner: '',
    summary: '开发 FlightGear 三维视景系统，通过 UDP 接收 Matlab 或嵌入式仿真板输出的位姿数据，用于飞行控制算法调试与状态分析。',
    tags: ['MATLAB', 'FlightGear', 'UDP', 'Embedded', 'Visualization'],
    highlights: [
      '搭建三维视景仿真环境并配置无人机物理参数与模型。',
      '在嵌入式仿真板运行倾转旋翼动力学模型，支持闭环控制输入与动力学响应。',
      '开发 UDP 数据接收模块，实现多平台位姿信息实时同步。'
    ],
    results: ['UDP 数据接收延迟控制在 50 ms 以内，并支持多场景切换与飞行参数实时标注。'],
    cardMedia: 'assets/media/projects/flightgear-simulation/flightgear-runway.jpg',
    sections: [
      {
        title: '视景与通信链路',
        paragraphs: ['该系统将动力学计算与三维渲染分离：Matlab 或嵌入式仿真板负责动力学，FlightGear 负责视景展示，UDP 在不同平台之间同步位姿与状态数据。'],
        media: [
          { src: 'assets/media/projects/flightgear-simulation/flightgear-runway.jpg', alt: 'FlightGear 跑道场景', caption: 'FlightGear 三维视景场景' },
          { src: 'assets/media/projects/flightgear-simulation/flightgear-view.jpg', alt: 'FlightGear 联合仿真界面', caption: '联合仿真运行界面' }
        ]
      }
    ]
  },
  {
    id: 'vehicle-landing-cfd',
    order: 7,
    title: '车顶动态起降 Fluent 气动分析',
    shortTitle: '车顶动态起降 CFD',
    category: 'CFD · UAV Aerodynamics',
    period: '本科阶段',
    role: '项目成员',
    partner: '',
    summary: '针对无人机在车顶动态起降时的气流扰动，建立车顶—无人机 CFD 模型，分析风速与起降高度对压力、湍流和受扰力矩的影响。',
    tags: ['Fluent', 'CFD', 'Aerodynamics', 'ANSYS', 'UAV'],
    highlights: [
      '建立车顶—无人机流场模型，分析 0–30 m/s 风速和不同起降高度下的压力分布与湍流强度。',
      '提取受扰力与力矩数据，并据此迭代导流板、起落架等结构设计。',
      '参与动态起降试验，对比仿真与实测数据。'
    ],
    results: [
      '项目测试记录显示，结构优化后起降侧向力波动降低约 40%。',
      '实现车速 0–50 km/h 条件下动态起降，项目测试记录的起降成功率达到 90%。'
    ],
    cardMedia: 'assets/media/projects/vehicle-landing-cfd/cfd-result-1.jpg',
    sections: [
      {
        title: 'CFD 分析与结构优化',
        paragraphs: ['通过数值仿真观察车体地效、自然风和起降高度对无人机附近流场的影响，再将结果转化为结构修改依据。'],
        media: [
          { src: 'assets/media/projects/vehicle-landing-cfd/cfd-result-1.jpg', alt: '车顶起降 CFD 结果一', caption: '车顶附近流场 / 压力分布结果' },
          { src: 'assets/media/projects/vehicle-landing-cfd/cfd-result-2.jpg', alt: '车顶起降 CFD 结果二', caption: '不同工况下的流场仿真结果' }
        ]
      }
    ]
  },
  {
    id: 'coaxial-vtol',
    order: 8,
    title: '共轴垂直起降无人机设计',
    shortTitle: '共轴垂直起降无人机',
    category: 'UAV · Mechanical Design',
    period: '本科阶段',
    role: '项目负责人',
    partner: '',
    summary: '带领 3 人团队完成共轴双旋翼垂直起降无人机总体结构、旋翼布局、动力装置集成以及 ANSYS 结构 / 流场仿真。',
    tags: ['Coaxial VTOL', 'ANSYS', 'Structure', 'Prototype'],
    highlights: [
      '负责旋翼系统布局、机身框架选型和动力装置集成。',
      '主导关键承重部件结构强度与旋翼气动布局仿真。'
    ],
    results: ['项目测试记录：整机重量控制在 5 kg 以内，最大有效载荷提升 20%，悬停精度 ±0.2 m，续航约 20 min。'],
    cardMedia: 'assets/media/projects/coaxial-vtol/design.jpg',
    sections: [
      {
        title: '设计、样机与验证',
        paragraphs: ['项目以结构轻量化与升力效率为主要约束，完成总体方案到试飞验证的闭环。'],
        media: [
          { src: 'assets/media/projects/coaxial-vtol/design.jpg', alt: '共轴无人机设计', caption: '共轴垂直起降无人机方案' },
          { src: 'assets/media/projects/coaxial-vtol/prototype.jpg', alt: '共轴无人机样机', caption: '共轴无人机样机' },
          { src: 'assets/media/projects/coaxial-vtol/simulation.jpg', alt: '共轴无人机仿真', caption: '结构 / 流场仿真结果' }
        ]
      }
    ]
  },
  {
    id: 'voice-control-quadcopter',
    order: 9,
    title: '语音控制四轴无人机',
    shortTitle: '语音控制四轴',
    category: 'PX4 · Ground Control · Embedded',
    period: '本科阶段',
    role: '主要开发',
    partner: '',
    summary: '在 Ubuntu + Qt 环境完成 PX4 与 QGC 的编译适配，新增语音指令控制链路，并开发 Android 语音识别应用。',
    tags: ['PX4', 'QGC', 'Qt', 'Android', 'Bluetooth'],
    highlights: [
      '对 PX4 飞控二次开发，新增“起飞 / 悬停 / 返航”等语音指令解析接口。',
      '开发 Android 语音识别应用，通过蓝牙与地面站通信。',
      '实现语音与传统遥控器的双模控制。'
    ],
    results: ['项目测试记录：语音控制链路响应延迟不超过 1 s。'],
    cardMedia: 'assets/media/projects/voice-control-quadcopter/quadcopter.jpg',
    sections: [
      {
        title: '系统实现',
        paragraphs: ['该项目把移动端语音识别、地面站通信和 PX4 飞控接口串联为完整控制链路，是较早期的嵌入式系统集成实践。'],
        media: [
          { src: 'assets/media/projects/voice-control-quadcopter/quadcopter.jpg', alt: '四轴无人机平台', caption: '四轴无人机硬件平台' },
          { src: 'assets/media/projects/voice-control-quadcopter/app.jpg', alt: '语音控制 Android 应用', caption: '语音识别应用界面' },
          { src: 'assets/media/projects/voice-control-quadcopter/flight.jpg', alt: '四轴无人机飞行测试', caption: '飞行测试' },
          { src: 'assets/media/projects/voice-control-quadcopter/fixed-wing.jpg', alt: '本科固定翼项目', caption: '同期固定翼 / 空投项目实验' }
        ]
      }
    ]
  }
];

window.SITE_PROJECT_MAP = Object.fromEntries(window.SITE_PROJECTS.map((project) => [project.id, project]));

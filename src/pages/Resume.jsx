import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";

const Resume = () => {
    return (
        <div className="relative z-10 py-10 px-4 sm:px-10">
            <div className="max-w-4xl mx-auto bg-[#112240]/80 p-8 rounded-xl shadow-xl border border-blue-500">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-400 mb-6">
                    庄以煊
                </h1>
                <p className="text-base sm:text-lg text-blue-200 mb-10 leading-relaxed">
                    📧 zhuangyixuan46@163.com | 📱 +86 18359735953 | 💬 微信：zyx43ksdy
                </p>

                <Section title="🎓 教育经历">
                    <p className="text-blue-100">University of Twente（荷兰）  本科 · 计算机科学 · 2019.09 - 2024.09</p>
                    <p className="text-blue-100">King's College London（英国） 硕士 · 机器人 · 2025.09 - 2026.09</p>
                </Section>

                <Section title="💻 项目经历">
                    {projectList.map((p, idx) => (
                        <ListItem key={idx} title={p.title} time={p.time} job={p.job} content={p.content} />
                    ))}
                </Section>

                <Section title="📂 实习经历">
                    <ListItem
                        title="南方航空物流股份有限公司 · 信息技术岗 · 2022.02 - 2022.07"
                        content="负责公司机房管理；
                            公司所有人员电脑软件的日常维护、备份和恢复;
                            公司路由器、交换机、防火墙等管理和维护；
                            结束实习时帮助公司信息技术小组发布公司内部专用工作小程序。"
                    />
                    <ListItem
                        title="广东易达电子科技有限公司 · 软件工程师 · 2021.09 - 2022.01"
                        content="负责完成公司新产品开发计划；编制新产品相关的技术、工艺文件及检验标准"
                    />
                </Section>

                <Section title="🧠 技能及技术栈">
                    <p className="text-blue-100">雅思 7.5分</p>
                    <p className="text-blue-100">Java, Python, C#, JavaScript, HTML, CSS, SQL, React, TensorFlow(了解)</p>
                </Section>

                <Section title="💡 自我评价">
                    <p className="text-blue-100">
                        擅长Java程序开发，具有非常良好的编程习惯和规范。善于团队工作，易于沟通，适应与英语使用
                        者沟通。对于实现目标有强烈的自我驱动力，勤于反思，从过往中学习。检索信息能力和学习能力
                        强，乐于探索未知。
                    </p>
                </Section>
            </div>
        </div>
    );
};

const Section = ({ title, children }) => (
    <section className="mb-8">
        <h2 className="text-3xl text-blue-300 font-semibold border-b border-blue-500 pb-2 mb-4">
            {title}
        </h2>
        <div className="space-y-4 leading-relaxed">{children}</div>
    </section>
);

const ListItem = ({ title, time, job, content }) => (
    <div className="border-l-4 border-blue-400 pl-4">
        <p className="font-semibold text-blue-100 text-xl">{title}</p>
        <p className="text-blue-100 text-l">{time}</p>
        <p className="text-blue-300 text-base italic mb-1">{job}</p>
        <p className="text-blue-200 text-lg whitespace-pre-line leading-relaxed">{content}</p>
    </div>
);

const projectList = [
    {
        title: "利用机器学习算法获得用以区分来自不同社会背景的社交触摸的分类器",
        time: "2024.05 - 2024.07",
        job: "研究员",
        content:
            "利用触摸感应贴片进行数据采集，对用于时间序列数据处理的机器学习算法与社交触摸的相关文献\n" +
            "进行研究，独立编写基于Tensorflow的机器学习代码用以探明不同机器学习算法的效率差异，产出\n" +
            "论文一篇，发布于University of Twente Theses。",
    },
    {
        title: "用于管理管道监测设备的网页应用程序",
        time: "2024.02 - 2024.05",
        job: "网页应用全栈开发人员",
        content:
            "为德国Rosen公司设计并开发一款网页应用，可视化管道部署及标记设备。使用SCSS，React，\n" +
            "HTML5等技术开发网页前端。使用MongoDB，Node.js等技术搭建后端数据库并设计、部署所需\n" +
            "API。使用Selenium，Supertest及Jest测试前端及后端API端点。最终交付完整的、可用的供技术\n" +
            "人员管理管道检测设备的网页应用。",
    },
    {
        title: "具有嵌入式系统的智能冰箱",
        time: "2022.11 - 2023.01",
        job: "应用程序前端开发人员",
        content:
            "系统智能地检测放入冰箱中物品的保质期，并将其记录在数据库中。用户可以在智能手机上查看和\n" +
            "编辑冰箱中物品的名称和保质期，并且会收到物品即将过期的提醒。因时间限制等原因，最终产出\n" +
            "为高保真原型。",
    },
    {
        title: "Ultrapark停车管理系统",
        time: "2022.09 - 2022.11",
        job: "后端开发",
        content:
            "Ultrapark是一个基于树莓派RaspberryPi的停车管理系统，通过摄像头，用基于OpenCV的字符识\n" +
            "别算法记录所停车辆的车牌并记录于数据库中。我作为系统的后端开发人员参与设计了相关API。\n",
    },
    {
        title: "2D模拟经营游戏《宠爱归路》（Taptap2024 Game Jam参赛作品）",
        time: "2024.10 - 2024.12",
        job: "主程序",
        content:
            "作为主程带领程序团队一起开发一款基于Unity引擎的2D模拟经营游戏。具体负责与策划与美术方\n" +
            "面的对接，同程序团队讨论并分配开发任务，以及游戏后端和任务系统的设计开发。该项目经历了\n" +
            "完整的游戏开发过程，成功参与Taptap2024 Game Jam竞赛。\n",
    },
    {
        title: "横版跑酷游戏《岁月悬丝》（AI Game Jam 2023参赛作品）",
        time: "2023.08",
        job: "主程序",
        content:
            "结合AI技术独立设计制作的一款基于Unity引擎的双视角横版跑酷游戏，通过双人合作通关。作为程\n" +
            "序参与游戏开发过程，在四十八小时的开发时间内与团队完成了游戏的开发，并利用Unity ml-agents技术在游戏中融入了机器学习技术，使得游戏可以一定程度上的模仿玩家的操作，使得单人\n" +
            "玩家也可以进行游戏。成功的参加了AI Game Jam竞赛",
    },
    {
        title: "2D游戏《咪咪肚一弗油但珍珠奶茶》（2025 Global GameJam参赛作品）",
        time: "2025-01-17 - 2025-01-19",
        job: "主程序",
        content:
            "参与2025 Global Game Jam48小时极限开发，创作出的2D游戏，使用Unity引擎制作，由C#编写而成",
    },
];

export default Resume;
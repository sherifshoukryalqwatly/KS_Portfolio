import useScrollAnimation from "../hooks/useScrollAnimation.jsx";

function Skills() {
    const ref = useScrollAnimation();
    const skillCategories = [
        {
            title: "Accounting Skills",
            skills: [
                "Full-cycle accounting: AP, AR, GL, Fixed Assets, Cash Management, Cost Accounting",
                "Daily bookkeeping, review & verification",
                "Month-end closing, journal entries, account reconciliations",
                "Financial reporting: monthly & quarterly statements, budget vs. actual",
                "Budget development & cost control monitoring",
                "Project-related billing & cost monitoring",
                "Bank reconciliations & liabilities management",
                "Payment processing & voucher management",
                "Inventory control & cost management",
                "Intercompany transactions & reconciliations",
                "Prepaid expenses & advance payments monitoring",
                "Monthly sales revenue reporting",
                "Compliance with policies, procedures, financial regulations",
                "Letters of Credit (L/C) & Letters of Guarantee (L/G) preparation",
                "Coordination with external auditors during year-end audits"
            ],
            icon: "bi bi-calculator",
        },
        {
            title: "Technical Skills",
            skills: [
                "Accounting programs expertise",
                "Oracle system",
                "Oracle E-Business Suite R12: GL, AP, AR, Fixed Assets, Cost Management, Inventory, Project, Cash Management modules",
                "Professional in MS Office",
                "Daily Internet user",
                "Typing proficiency in English & Arabic"
            ],
            icon: "bi bi-laptop",
        },
    ];

    return (
        <section id="skills" ref={ref} className="scroll-section skills-section py-5 bg-light">
            <div className="container text-center">
                <h2 className="fw-bold text-primary mb-4">My Skills</h2>
                <p className="text-secondary mb-5">
                    Here are my core accounting competencies and technical skills that ensure financial accuracy and efficiency.
                </p>

                <div className="row gy-4">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="col-md-6 col-lg-6">
                            <div className="card h-100 border-0 shadow-sm p-4">
                                <div className="card-body text-start">
                                    <div className="mb-3 text-center">
                                        <i className={`${category.icon} fs-1 text-primary`}></i>
                                    </div>
                                    <h5 className="fw-bold text-primary mb-3 text-center">{category.title}</h5>
                                    <ul className="list-unstyled">
                                        {category.skills.map((skill, i) => (
                                            <li key={i} className="mb-2 text-secondary fw-medium">
                                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;

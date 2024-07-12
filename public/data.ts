import {
    creationLottie,
    ideationLottie,
    spinoutLottie,
    validationLottie,
    scaleUpLottie,
  } from "@public/animations";

export const stages = [
"ideas-search",
"finances",
"concept-validation",
"recruitment",
"market-research",
"marketing",
"product-approach",
"engineering",
"market-entry",
"company-formation",
"ui-ux-design",
"investment-attraction",
"product-management",
"legal-and-hr"
];
export const links = ["what-we-do", "how-we-do-it", "investors", "faq", "contacts"];

export const stageSections = [
    {
        stage: "ideation",
        animation: ideationLottie,
    },
    {
        stage: "validation",
        animation: validationLottie,
    },
    {
        stage: "creation",
        animation: creationLottie,
    },
    {
        stage: "spinout",
        animation: spinoutLottie,
    },
    {
        stage: "scale-up",
        animation: scaleUpLottie,
    },
]

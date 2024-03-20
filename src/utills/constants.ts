export const Casualty = {
  INJURED_WEIGHT: 1,
  CASUALTY_WEIGHT: 1,
  SCORE: {
    BAD_MAX: 8,
    BAD_MIN: 6,
    NORMAL_MAX: 5.99,
    NORMAL_MIN: 3,
    GOOD_MAX: 2.99,
    GOOD_MIN: 0,
  },
} as const;

export const ActCategory = {
  ALL: 0,
  INDUSTRIAL_SAFETY_HEALTH_LAW: 1,
  INDUSTRIAL_SAFETY_HEALTH_LAW_ORDINANCE: 2,
  INDUSTRIAL_SAFETY_HEALTH_LAW_RULE: 3,
  INDUSTRIAL_SAFETY_HEALTH_STANDARD_RULE: 4,
  NOTICE_ORDINANCE_REGULATION: 5,
  MEDIA: 6,
  KOSHA_GUIDE: 7,
} as const;

export const ActCategoryName: { [index: number]: string } = {
  0: "전체",
  1: "산업안전보건법",
  2: "산업안전보건법시행령",
  3: "산업안전보건법시행규칙",
  4: "산업안전보건기준에관한규칙",
  5: "고시.훈령.예규",
  6: "미디어",
  7: "안전보건기술지침(KOSHA GUIDE)",
  8: "미분류",
  9: "미분류",
} as const;

export default Casualty;

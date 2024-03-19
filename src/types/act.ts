export type SafetyAct = {
  category: string;
  content: string;
  doc_id: string;
  highlight_content: string;
  score: number;
  title: string;
  filepath?: string;
};

export type TotalMedia = {
  category: string;
  content: string;
  doc_id: string;
  filepath: string;
  highLight_content: string;
  image_path: string[];
  keyword: string;
  med_thumb_yn: "Y" | "N";
  media_style: string;
  score: number;
  title: string;
};

// fetch Data Type
export type SafetyActData = {
  // enum
  associated_word: string[];
  categorycount: {
    [index: number]: number;
  };
  total_media: TotalMedia[];
  dataType: "JSON";
  items: {
    item: SafetyAct[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
};

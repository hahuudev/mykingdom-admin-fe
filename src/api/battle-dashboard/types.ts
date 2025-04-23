export interface IDocument {
  id: number;
  document_url: string;
  document_type: string;
  document_size: number;
  document_name: string;
  unique_name: string;
}

export interface IBattleQuery {
  page: number;
  limit: number;
  time_type: string;
}

export interface IUploadFileResponse {
  file_name: string;
  unique_name: string;
  url: string;
  content_type: string;
  size: number;
}

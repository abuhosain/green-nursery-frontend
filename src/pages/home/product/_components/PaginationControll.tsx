import React from "react";
import { Pagination } from "antd";

interface PaginationControlsProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onChangePage: (page: number) => void;
  onChangePageSize: (size: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({ currentPage, totalItems, itemsPerPage, onChangePage, onChangePageSize }) => {
  return (
    <Pagination
      current={currentPage}
      total={totalItems}
      pageSize={itemsPerPage}
      showSizeChanger
      onChange={onChangePage}
      onShowSizeChange={(size) => onChangePageSize(size)}
      style={{ marginTop: 16 }}
    />
  );
};

export default PaginationControls;

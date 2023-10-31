import React from "react";
import { Icon } from "@mui/material";

import { BuusinessItem, ContainerGroup } from "../../styles";
import "../styles.css";
import { CostCenterIcon, BranchIcon, BusinessUnitIcon, DepartmentIcon, SimpleIcon, SearchIcon } from "../../../Icons";

export default function ComponentShape({ item, name, level, category, x, y, handleClick, divisionsData }) {
  const categoryColors = {
    Branch: "#7E6BB9",
    CostCenter: "#62C957",
    BusinessUnit: "#FB9D24",
    Department: "#1BBED3",
  };

  const categoryImage = {
    Branch: BranchIcon,
    CostCenter: CostCenterIcon,
    BusinessUnit: BusinessUnitIcon,
    Department: DepartmentIcon,
    Simple: SimpleIcon,
  };

  return (
    <ContainerGroup className="group" category={category} x={x} y={y}>
      {level !== "levelOne" && (
        <div className="indicator-glue">
          <div className="point" />
          <div className="dashed" />
        </div>
      )}

      <div className="business-division">
        <div className="indicator-color" style={{ backgroundColor: categoryColors[category] ?? "#73BDCE" }} />
        <BuusinessItem className="business-division-item">
          {category !== "Matriz" ? (
            <div className="division-icon" style={{ backgroundImage: `url(${categoryImage[category]}` }} />
          ) : (
            <>
              {/* Add Logo Matrix here */}
              <div className="matrix-division" style={{ backgroundImage: `url(${divisionsData[0]?.pictureUrl}` }} />
            </>
          )}
          <div className="business-division-item-branch">
            <div className="business-descriptions">
              <div className="business-category">{category}</div>
              <div className="business-name" style={{ color: categoryColors[category] ?? "#4E4E4E" }}>
                {name}
              </div>
            </div>
            {category !== "Matriz" && (
              <Icon className="button-details" onClick={() => handleClick(item)} s>
                <SearchIcon />
              </Icon>
            )}
          </div>
        </BuusinessItem>
      </div>
    </ContainerGroup>
  );
}

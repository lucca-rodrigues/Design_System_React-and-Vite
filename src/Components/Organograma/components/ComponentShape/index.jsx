import { Icon } from "@mui/material";

import { BusinessItem, ContainerGroup } from "../../styles";
import "../../styles.css";
import { CostCenterIcon, BranchIcon, BusinessUnitIcon, DepartmentIcon, SimpleIcon, SearchIcon } from "../../../Icons";

export default function ComponentShape({ item, name, level, category, x, y, handleClick, divisionsData }) {
  const categoryColors = {
    Branch: "#7E6BB9",
    CostCenter: "#62C957",
    BusinessUnit: "#FB9D24",
    Department: "#1BBED3",
  };

  const categoryImage = {
    Branch: <BranchIcon size={30} />,
    CostCenter: <CostCenterIcon size={30} />,
    BusinessUnit: <BusinessUnitIcon size={30} />,
    Department: <DepartmentIcon size={30} />,
    Simple: <SimpleIcon size={30} />,
  };

  const categoryLabels = {
    Matriz: "Matriz",
    Branch: "Filial",
    CostCenter: "Centro de Custo",
    BusinessUnit: "Unidade de Negócio",
    Department: "Departamento",
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
        <BusinessItem className="business-division-item">
          {category !== "Matriz" ? (
            <div className="division-icon">{categoryImage[category]}</div>
          ) : (
            <>
              {/* Add Logo Matrix here */}
              <div className="matrix-division" style={{ backgroundImage: `url(${divisionsData[0]?.pictureUrl}` }} />
            </>
          )}
          <div className="business-division-item-branch">
            <div className="business-descriptions">
              <div className="business-category">{categoryLabels[category]}</div>
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
        </BusinessItem>
      </div>
    </ContainerGroup>
  );
}

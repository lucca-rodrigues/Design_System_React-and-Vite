import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import ComponentShape from "./components/ComponentShape";

export default function Organograma({ title, divisionsData, handleClick, ...rest }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  function validateIfRemoveIndicator(value) {
    if (value?.branches.length > 0) {
      return true;
    }
    return false;
  }

  function zoomIn() {
    setZoomLevel(Math.min(zoomLevel + 0.1, 2));
  }

  function zoomOut() {
    setZoomLevel(Math.max(zoomLevel - 0.1, 0.5));
  }

  function handleDrag(e) {
    if (e.buttons === 1) {
      setIsDragging(true);
      setPanX(panX + e.movementX);
      setPanY(panY + e.movementY);
    } else {
      setIsDragging(false);
    }
  }

  function handleScroll(e) {
    if (e.deltaY > 0) {
      zoomOut();
    } else {
      zoomIn();
    }
  }

  const containerRef = useRef(null);

  useEffect(() => {
    let totalWidth = 0;
    let totalHeight = 0;

    if (containerRef.current) {
      containerRef.current.style.width = `${totalWidth}px`;
      containerRef.current.style.height = `${totalHeight}px`;
    }
  }, [zoomLevel]);
  return (
    <>
      <h1>{title}</h1>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div
          onWheel={handleScroll}
          onMouseMove={handleDrag}
          style={{
            transform: `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`,
            width: "100%",
            height: "100%",
            minHeight: "500px",
            minWidth: "1200px",
            overflow: "visible",
            padding: "20px",
            cursor: isDragging ? "grabbing" : "default",
          }}
        >
          {divisionsData?.map((item, index) => (
            <div key={index} className="levelOne">
              <ComponentShape
                item={item}
                name={item?.name}
                level="levelOne"
                category={item?.segmentationType?.value}
                handleClick={(value) => handleClick(value)}
                divisionsData={divisionsData}
              />
              {item?.branches?.map((levelTwo, index) => (
                <div
                  key={index}
                  className={`levelTwo ${validateIfRemoveIndicator(levelTwo) && "removelastindicator"}`}
                  style={{
                    marginLeft: "200px",
                    minHeight: item?.branches.length > 0 ? item?.branches.length + 1 * "250px" : "350px",
                  }}
                >
                  <ComponentShape
                    item={levelTwo}
                    name={levelTwo?.name}
                    category={levelTwo?.segmentationType?.value}
                    handleClick={(value) => handleClick(value)}
                    divisionsData={divisionsData}
                  />
                  {levelTwo?.branches?.map((levelThree, index) => (
                    <div
                      key={index}
                      className={`levelThree multiple-items ${validateIfRemoveIndicator(levelTwo) && "removelastindicator"}`}
                      style={{
                        marginLeft: "200px",
                        minHeight: levelTwo?.branches.length > 0 ? levelTwo?.branches.length + 1 * "250px" : "350px",
                      }}
                    >
                      <ComponentShape
                        item={levelThree}
                        name={levelThree?.name}
                        category={levelThree?.segmentationType?.value}
                        handleClick={(value) => handleClick(value)}
                        divisionsData={divisionsData}
                      />

                      {levelThree?.branches?.map((levelFour, index) => (
                        <div
                          key={index}
                          className={`levelFour ${validateIfRemoveIndicator(levelThree) && "removelastindicator"}`}
                          style={{
                            marginLeft: "200px",
                            minHeight: levelThree?.branches.length > 0 ? levelThree?.branches.length + 1 * "250px" : "350px",
                          }}
                        >
                          <ComponentShape
                            item={levelFour}
                            name={levelFour?.name}
                            category={levelFour?.segmentationType?.value}
                            handleClick={(value) => handleClick(value)}
                            divisionsData={divisionsData}
                          />
                          {levelFour?.branches?.map((levelFive, index) => (
                            <div
                              key={index}
                              className={`levelFive ${validateIfRemoveIndicator(levelFour) && "removelastindicator"}`}
                              style={{
                                marginLeft: "200px",
                                minHeight: levelFour?.branches.length > 0 ? levelFour?.branches.length + 1 * "250px" : "350px",
                              }}
                            >
                              <ComponentShape
                                item={levelFive}
                                name={levelFive?.name}
                                category={levelFive?.segmentationType?.value}
                                handleClick={(value) => handleClick(value)}
                                divisionsData={divisionsData}
                              />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Organograma.propTypes = {
  title: PropTypes.string.isRequired,
};
Organograma.defaultProps = {
  title: "Organograma da empresa",
};

import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";
import kebab from "../../img/more-vertical-kebab.svg";
import searchBlack from "../../img/searchBlack.svg";
import plus from "../../img/plus.svg";
import calendar from "../../img/calendar.svg";
import union from "../../img/Union.svg";
import microButton from "../../img/Micro Button.svg";

export default function Modal({ open, setOpen }) {
  const dateInputRefs = [useRef(null), useRef(null)];
  const [selectedDates, setSelectedDates] = useState(["", ""]);

  // Календарь
  const handleCalendarClick = (index) => {
    if (dateInputRefs[index].current) {
      dateInputRefs[index].current.showPicker();
    }
  };

  const handleDateChange = (index, event) => {
    const newDates = [...selectedDates];
    newDates[index] = event.target.value;
    setSelectedDates(newDates);
  };

  const modalRef = useRef(null);

  // Закрытие модального окна при нажатии на Esc
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  };

  // Закрытие модального окна при клике вне области modal
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      // Добавляем обработчики событий только когда модальное окно открыто
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Удаляем обработчики событий при закрытии модального окна
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  //Input
  //Согласующие
  const [inputValueСoncordants, setInputValueСoncordants] = useState("");
  const [inputValuesСoncordants, setInputValuesСoncordants] = useState([]);

  //Ответственный
  const [inputValueResponsible, setInputValueResponsible] = useState("");
  const [inputValuesResponsible, setInputValuesResponsible] = useState([]);

  //Группа
  const [inputValueGroup, setInputValueGroup] = useState("");
  const [inputValuesGroup, setInputValuesGroup] = useState([]);

  //Кем открыто
  const [inputValueOpen, setInputValueOpen] = useState("");
  const [inputValuesOpen, setInputValuesOpen] = useState([]);

  //Кем сооздано
  const [inputValueCreated, setInputValueCreated] = useState("");
  const [inputValuesCreated, setInputValuesCreated] = useState([]);

  const handleInputChange = (event, type) => {
    switch (type) {
      case "Ответственный":
        setInputValueResponsible(event.target.value);
        break;
      case "Группа":
        setInputValueGroup(event.target.value);
        break;
      case "Согласующие":
        setInputValueСoncordants(event.target.value);
        break;
      case "Кем открыто":
        setInputValueOpen(event.target.value);
        break;
      case "Кем создано":
        setInputValueCreated(event.target.value);
        break;
    }
  };

  const handleKeyPress = (event, type) => {
    switch (type) {
      case "Ответственный":
        if (event.key === "Enter" && inputValueResponsible.trim()) {
          // Добавляем текущее значение в массив и очищаем поле ввода
          setInputValuesResponsible((prevValues) => [
            ...prevValues,
            inputValueResponsible.trim(),
          ]);
          setInputValueResponsible("");
        }
        break;
      case "Группа":
        if (event.key === "Enter" && inputValueGroup.trim()) {
          // Добавляем текущее значение в массив и очищаем поле ввода
          setInputValuesGroup((prevValues) => [
            ...prevValues,
            inputValueGroup.trim(),
          ]);
          setInputValueGroup("");
        }
        break;
      case "Согласующие":
        if (event.key === "Enter" && inputValueСoncordants.trim()) {
          // Добавляем текущее значение в массив и очищаем поле ввода
          setInputValuesСoncordants((prevValues) => [
            ...prevValues,
            inputValueСoncordants.trim(),
          ]);
          setInputValueСoncordants("");
        }
        break;
      case "Кем открыто":
        if (event.key === "Enter" && inputValueOpen.trim()) {
          // Добавляем текущее значение в массив и очищаем поле ввода
          setInputValuesOpen((prevValues) => [
            ...prevValues,
            inputValueOpen.trim(),
          ]);
          setInputValueOpen("");
        }
        break;
      case "Кем создано":
        if (event.key === "Enter" && inputValueCreated.trim()) {
          // Добавляем текущее значение в массив и очищаем поле ввода
          setInputValuesCreated((prevValues) => [
            ...prevValues,
            inputValueCreated.trim(),
          ]);
          setInputValueCreated("");
        }
        break;
    }
  };

  const deleteInputValues = (type) => {
    switch (type) {
      case "Ответственный":
        setInputValuesResponsible([]);
        break;
      case "Группа":
        setInputValuesGroup([]);
        break;
      case "Согласующие":
        setInputValuesСoncordants([]);
        break;
      case "Кем открыто":
        setInputValuesOpen([]);
        break;
      case "Кем создано":
        setInputValuesCreated([]);
        break;
    }
  };

  const deleteElement = (type, index) => {
    switch (type) {
      case "Ответственный":
        const newArray1 = inputValuesResponsible.filter(
          (item, indexel) => indexel !== index
        );
        setInputValuesResponsible(newArray1);
        break;
      case "Группа":
        const newArray2 = inputValuesGroup.filter(
          (item, indexel) => indexel !== index
        );
        setInputValuesGroup(newArray2);
        break;
      case "Согласующие":
        const newArray3 = inputValuesСoncordants.filter(
          (item, indexel) => indexel !== index
        );
        setInputValuesСoncordants(newArray3);
        break;
      case "Кем открыто":
        const newArray4 = inputValuesOpen.filter(
          (item, indexel) => indexel !== index
        );
        setInputValuesOpen(newArray4);
        break;
      case "Кем создано":
        const newArray5 = inputValuesCreated.filter(
          (item, indexel) => indexel !== index
        );
        setInputValuesCreated(newArray5);
        break;
    }
  };

  return (
    <>
      {open ? (
        <div className="modalWindow">
          <div className="modal" ref={modalRef}>
            <div className="modal__header-mobile">
              <div className="modal__left">
                <h2 className="modal__h2">Подзадача</h2>
              </div>

              <div className="modal__right-mobile">
                <img
                  src={union}
                  alt="union"
                  onClick={() => setOpen(false)}
                  className="iconBorder"
                />
              </div>
            </div>

            <div className="modal__header">
              <div className="modal__left">
                <h2 className="modal__h2">Подзадача</h2>
              </div>

              <div className="modal__right">
                <button className="btn-blue">Сохранить</button>
                <button className="btn-grey" onClick={() => setOpen(false)}>
                  Отменить
                </button>
              </div>
            </div>

            <h1 className="modalWindow__h1">Новая запись</h1>

            <div className="modal__body">
              <div className="modal__main">
                <div className="modal__element-ALLWidth">
                  <label className="textBr">
                    <span style={{ color: "red" }}>*</span> Тема
                  </label>
                  <input type="text" className="inputText" />
                </div>

                <div className="modal__element-ALLWidth">
                  <label className="textBr">Статус</label>
                  <input type="text" className="inputText" />
                </div>

                <div className="modal__element-ALLWidth">
                  <label className="textBr">Описание</label>
                  <input type="text" className="inputText" />
                </div>

                <div className="modal__element-ALLWidth">
                  <label className="textBr">Продукт</label>
                  <div className="modal__elementOneImage">
                    <input type="text" className="inputText" />
                    <img
                      src={searchBlack}
                      alt="поиск"
                      width="30px"
                      height="30px"
                      className="iconBorder"
                    />
                  </div>
                </div>

                <div className="modal__element-ALLWidth">
                  <label className="textBr">
                    <span style={{ color: "red" }}>*</span> Рабочие заметки
                  </label>
                  <input type="text" className="inputText" />
                </div>

                <div className="modal__element-ALLWidth">
                  <label className="textBr">Приоритет</label>
                  <input type="text" className="inputText" />
                </div>

                <div className="modal__element-ALLWidth">
                  <label className="textBr">Ответственный</label>
                  <div className="modal__elementTwoImage">
                    <div className="modal__FuncBlock">
                      <div className="valuesContainer">
                        {inputValuesResponsible.map((value, index) => (
                          <div key={index} className="valueItem">
                            {value}
                            <img
                              src={union}
                              alt="union"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                deleteElement("Ответственный", index)
                              }
                            />
                          </div>
                        ))}
                        <input
                          style={{ width: "200px"}}
                          type="search"
                          className="inputText"
                          value={inputValueResponsible}
                          onChange={(event) =>
                            handleInputChange(event, "Ответственный")
                          }
                          onKeyPress={(event) =>
                            handleKeyPress(event, "Ответственный")
                          }
                        />
                      </div>
                      <img
                      style = {{cursor: 'pointer'}}
                        src={microButton}
                        alt="microButton"
                        className="content__microButton"
                        onClick={() => deleteInputValues("Ответственный")}
                      />
                    </div>

                    <img
                      src={plus}
                      alt="добавить"
                      width="30px"
                      height="30px"
                      className="iconBorder"
                    />
                    <img
                      src={searchBlack}
                      alt="поиск"
                      width="30px"
                      height="30px"
                      className="iconBorder"
                    />
                  </div>
                </div>

                <div className="modal__element-ALLWidth">
                  <label className="textBr">Группа</label>
                  <div className="modal__elementTwoImage">
                    <div className="modal__FuncBlock">
                      <div className="valuesContainer">
                        {inputValuesGroup.map((value, index) => (
                          <div key={index} className="valueItem">
                            {value}
                            <img
                              src={union}
                              alt="union"
                              style={{ cursor: "pointer" }}
                              onClick={() => deleteElement("Группа", index)}
                            />
                          </div>
                        ))}
                        <input
                          style={{ width: "200px"}}
                          type="search"
                          className="inputText"
                          value={inputValueGroup}
                          onChange={(event) =>
                            handleInputChange(event, "Группа")
                          }
                          onKeyPress={(event) =>
                            handleKeyPress(event, "Группа")
                          }
                        />
                      </div>
                      <img
                        style = {{cursor: 'pointer'}}
                        src={microButton}
                        alt="microButton"
                        className="content__microButton"
                        onClick={() => deleteInputValues("Группа")}
                      />
                    </div>

                    <img
                      src={plus}
                      alt="добавить"
                      width="30px"
                      height="30px"
                      className="iconBorder"
                    />
                    <img
                      src={searchBlack}
                      alt="поиск"
                      width="30px"
                      height="30px"
                      className="iconBorder"
                    />
                  </div>
                </div>

                <div className="modal__element-ALLWidth">
                  <label className="textBr">Комментарии</label>
                  <input type="text" className="inputText" />
                </div>

                <div className="modal__element-ALLWidth">
                  <label className="textBr">Согласующие</label>
                  <div className="modal__elementTwoImage">
                    <div className="modal__FuncBlock">
                      <div className="valuesContainer">
                        {inputValuesСoncordants.map((value, index) => (
                          <div key={index} className="valueItem">
                            {value}
                            <img
                              src={union}
                              alt="union"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                deleteElement("Согласующие", index)
                              }
                            />
                          </div>
                        ))}
                        <input
                          style={{ width: "200px"}}
                          type="search"
                          className="inputText"
                          value={inputValueСoncordants}
                          onChange={(event) =>
                            handleInputChange(event, "Согласующие")
                          }
                          onKeyPress={(event) =>
                            handleKeyPress(event, "Согласующие")
                          }
                        />
                      </div>
                      <img
                        style = {{cursor: 'pointer'}}
                        src={microButton}
                        alt="microButton"
                        className="content__microButton"
                        onClick={() => deleteInputValues("Согласующие")}
                      />
                    </div>

                    <img
                      src={plus}
                      alt="добавить"
                      width="30px"
                      height="30px"
                      className="iconBorder"
                    />
                    <img
                      src={searchBlack}
                      alt="поиск"
                      width="30px"
                      height="30px"
                      className="iconBorder"
                    />
                  </div>
                </div>

                {["Когда открыто", "Когда создано"].map((label, index) => (
                  <div className="modal__element-ALLWidth" key={index}>
                    <label className="textBr">{label}</label>
                    <div className="modal__elementOneImage">
                      <input
                        type="date"
                        ref={dateInputRefs[index]}
                        value={selectedDates[index]}
                        onChange={(event) => handleDateChange(index, event)}
                        className="inputText"
                      />
                      <img
                        src={calendar}
                        alt="выбор даты"
                        width="30px"
                        height="30px"
                        className="iconBorder"
                        onClick={() => handleCalendarClick(index)}
                      />
                    </div>
                  </div>
                ))}

                <div className="modal__element-ALLWidth">
                  <label className="textBr">Кем открыто</label>
                  <div className="modal__elementTwoImage">
                    <div className="modal__FuncBlock">
                      <div className="valuesContainer">
                        {inputValuesOpen.map((value, index) => (
                          <div key={index} className="valueItem">
                            {value}
                            <img
                              src={union}
                              alt="union"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                deleteElement("Кем открыто", index)
                              }
                            />
                          </div>
                        ))}
                        <input
                          style={{ width: "200px"}}
                          type="search"
                          className="inputText"
                          value={inputValueOpen}
                          onChange={(event) =>
                            handleInputChange(event, "Кем открыто")
                          }
                          onKeyPress={(event) =>
                            handleKeyPress(event, "Кем открыто")
                          }
                        />
                      </div>
                      <img
                        style = {{cursor: 'pointer'}}
                        src={microButton}
                        alt="microButton"
                        className="content__microButton"
                        onClick={() => deleteInputValues("Кем открыто")}
                      />
                    </div>

                    <img
                      src={plus}
                      alt="добавить"
                      width="30px"
                      height="30px"
                      className="iconBorder"
                    />
                    <img
                      src={searchBlack}
                      alt="поиск"
                      width="30px"
                      height="30px"
                      className="iconBorder"
                    />
                  </div>
                </div>

                <div className="modal__element-ALLWidth">
                  <label className="textBr">Кем создано</label>
                  <div className="modal__elementTwoImage">
                    <div className="modal__FuncBlock">
                      <div className="valuesContainer">
                        {inputValuesCreated.map((value, index) => (
                          <div key={index} className="valueItem">
                            {value}
                            <img
                              src={union}
                              alt="union"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                deleteElement("Кем создано", index)
                              }
                            />
                          </div>
                        ))}
                        <input
                          style={{ width: "200px"}}
                          type="search"
                          className="inputText"
                          value={inputValueCreated}
                          onChange={(event) =>
                            handleInputChange(event, "Кем создано")
                          }
                          onKeyPress={(event) =>
                            handleKeyPress(event, "Кем создано")
                          }
                        />
                      </div>
                      <img
                        style = {{cursor: 'pointer'}}
                        src={microButton}
                        alt="microButton"
                        className="content__microButton"
                        onClick={() => deleteInputValues("Кем создано")}
                      />
                    </div>

                    <img
                      src={plus}
                      alt="добавить"
                      width="30px"
                      height="30px"
                      className="iconBorder"
                    />
                    <img
                      src={searchBlack}
                      alt="поиск"
                      width="30px"
                      height="30px"
                      className="iconBorder"
                    />
                  </div>
                </div>

                <div className="modal__element-ALLWidth mobileOpenButton">
                  <button className="btn-blue">Сохранить</button>
                  <button className="btn-grey" onClick={() => setOpen(false)}>
                    Отменить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

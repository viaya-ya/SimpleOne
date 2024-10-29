import React, { useState, useEffect, useRef } from "react";
import "./Main.css";
import kebab from "../../img/more-vertical-kebab.svg";
import searchBlack from "../../img/searchBlack.svg";
import plus from "../../img/plus.svg";
import calendar from "../../img/calendar.svg";
import Modal from "../Modal/Modal.jsx";
import microButton from "../../img/Micro Button.svg";
import union from "../../img/Union.svg";

export default function Main() {
  const [clickButton, setClickButton] = useState(false);
  const dropdownRef = useRef(null);
  const dateInputRefs = [useRef(null), useRef(null)];
  const [selectedDates, setSelectedDates] = useState(["", ""]);

  // Мобильная версия появления и закрытия кнопок
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setClickButton(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  //Для появления  box-shadow у content__header
  const [isScrolled, setIsScrolled] = useState(false);
  const contentBodyRef = useRef(null);

  const handleScroll = () => {
    if (contentBodyRef.current) {
      setIsScrolled(contentBodyRef.current.scrollTop > 0);
    }
  };

  useEffect(() => {
    const contentElement = contentBodyRef.current;

    if (contentElement) {
      contentElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Модальное окно
  const [openModal, setOpenModal] = useState(false);

  //Input
  //Согласующие
  const [inputValueСoncordants, setInputValueСoncordants] = useState("");
  const [inputValuesСoncordants, setInputValuesСoncordants] = useState([
    "Верка Сердючка",
    "Алла Пугачева",
    "Максим Галкин",
  ]);

  //Ответственный
  const [inputValueResponsible, setInputValueResponsible] = useState("");
  const [inputValuesResponsible, setInputValuesResponsible] = useState([
    "Константин Анисимов",
  ]);

  //Группа
  const [inputValueGroup, setInputValueGroup] = useState("");
  const [inputValuesGroup, setInputValuesGroup] = useState(["Support Group"]);

  //Кем открыто
  const [inputValueOpen, setInputValueOpen] = useState("");
  const [inputValuesOpen, setInputValuesOpen] = useState(["Григорий Лепс"]);

  //Кем создано
  const [inputValueCreated, setInputValueCreated] = useState("");
  const [inputValuesCreated, setInputValuesCreated] = useState([
    "Ирина Аллегрова",
  ]);

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
      <div className="content">
        <div
          className={`content__header-mobile ${isScrolled ? "scrolled" : ""}`}
        >
          <div className="content__left">
            <h2 className="content__h2">Подзадача</h2>
          </div>

          <div className="content__right-mobile" ref={dropdownRef}>
            <img
              src={kebab}
              alt="settings"
              onClick={() => setClickButton(!clickButton)}
              className="iconBorder"
            />
            {clickButton ? (
              <ul className="content__ulList">
                <li>
                  {" "}
                  <button
                    className="btn-grey btn-small"
                    onClick={() => setOpenModal(true)}
                  >
                    Создать
                  </button>{" "}
                </li>
                <li>
                  {" "}
                  <button className="btn-blue btn-small">Сохранить</button>{" "}
                </li>
                <li>
                  {" "}
                  <button className="btn-grey btn-small">
                    Сохранить и выйти
                  </button>{" "}
                </li>
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className={`content__header ${isScrolled ? "scrolled" : ""}`}>
          <div className="content__left">
            <h2 className="content__h2">Подзадача</h2>
            <button className="btn-grey" onClick={() => setOpenModal(true)}>
              Создать
            </button>
          </div>

          <div className="content__right">
            <button className="btn-blue">Сохранить</button>
            <button className="btn-grey">Сохранить и выйти</button>
          </div>
        </div>

        <div className="content__body" ref={contentBodyRef}>
          <div className="content__title">
            <h1 className="title">
              STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто
              некоторые поля остаются редактируемыми для агента если он Caller
            </h1>
          </div>

          <div className="content__main">
            <div className="content__element">
              <label className="textBr">
                <span style={{ color: "red" }}>*</span> Тема
              </label>
              <input type="text" className="inputText" />
            </div>

            <div className="content__element">
              <label className="textBr">Статус</label>
              <input type="text" className="inputText" />
            </div>

            <div className="content__element">
              <label className="textBr">Описание</label>
              <input type="text" className="inputText" />
            </div>

            <div className="content__element">
              <label className="textBr">Продукт</label>
              <div className="content__elementOneImage">
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

            <div className="content__element">
              <label className="textBr">
                <span style={{ color: "red" }}>*</span> Рабочие заметки
              </label>
              <input type="text" className="inputText" />
            </div>

            <div className="content__element">
              <label className="textBr">Приоритет</label>
              <input type="text" className="inputText" />
            </div>

            <div className="content__element">
              <label className="textBr">Ответственный</label>
              <div className="content__elementTwoImage">
                <div className="content__FuncBlock">
                  <div className="valuesContainer">
                    {inputValuesResponsible.map((value, index) => (
                      <div key={index} className="valueItem">
                        {value}
                        <img
                          src={union}
                          alt="union"
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteElement("Ответственный", index)}
                        />
                      </div>
                    ))}
                    <input
                      style={{ width: "200px" }}
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
                    style={{ cursor: "pointer" }}
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

            <div className="content__element">
              <label className="textBr">Группа</label>
              <div className="content__elementTwoImage">
                <div className="content__FuncBlock">
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
                      style={{ width: "200px" }}
                      type="search"
                      className="inputText"
                      value={inputValueGroup}
                      onChange={(event) => handleInputChange(event, "Группа")}
                      onKeyPress={(event) => handleKeyPress(event, "Группа")}
                    />
                  </div>
                  <img
                    style={{ cursor: "pointer" }}
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

            <div className="content__element-ALLWidth">
              <label className="textBr">Комментарии</label>
              <input type="text" className="inputText" />
            </div>

            <div className="content__element-ALLWidth">
              <label className="textBr">Согласующие</label>
              <div className="content__elementTwoImage">
                <div className="content__FuncBlock">
                  <div className="valuesContainer">
                    {inputValuesСoncordants.map((value, index) => (
                      <div key={index} className="valueItem">
                        {value}
                        <img
                          src={union}
                          alt="union"
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteElement("Согласующие", index)}
                        />
                      </div>
                    ))}
                    <input
                      style={{ width: "200px" }}
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
                    style={{ cursor: "pointer" }}
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
              <div className="content__element" key={index}>
                <label className="textBr">{label}</label>
                <div className="content__elementOneImage">
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

            <div className="content__element">
              <label className="textBr">Кем открыто</label>
              <div className="content__elementTwoImage">
                <div className="content__FuncBlock">
                  <div className="valuesContainer">
                    {inputValuesOpen.map((value, index) => (
                      <div key={index} className="valueItem">
                        {value}
                        <img
                          src={union}
                          alt="union"
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteElement("Кем открыто", index)}
                        />
                      </div>
                    ))}
                    <input
                      style={{ width: "200px" }}
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
                    style={{ cursor: "pointer" }}
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

            <div className="content__element">
              <label className="textBr">Кем создано</label>
              <div className="content__elementTwoImage">
                <div className="content__FuncBlock">
                  <div className="valuesContainer">
                    {inputValuesCreated.map((value, index) => (
                      <div key={index} className="valueItem">
                        {value}
                        <img
                          src={union}
                          alt="union"
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteElement("Кем создано", index)}
                        />
                      </div>
                    ))}
                    <input
                      style={{ width: "200px" }}
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
                    style={{ cursor: "pointer" }}
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
          </div>
        </div>
      </div>
      <Modal open={openModal} setOpen={setOpenModal}></Modal>
    </>
  );
}

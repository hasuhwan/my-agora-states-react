import { useState, useCallback } from "react";

const SubmitComponent = ({ onDiscusstion, discussion, articleTimesFunc }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    let id = discussion.length + 5;
    const date = new Date();
    await fetch("http://localhost:4000/discussions/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: id,
        createdAt: `${date.toDateString()} ${date.toTimeString()}`,
        title: title,
        url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
        author: author,
        avatarUrl:
          "https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4",
        bodyHTML: body,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        id++;
        onDiscusstion([data]);
      });
    setAuthor("");
    setBody("");
    setTitle("");
  };
  const onTitleHandle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);
  const onAuthorHandle = useCallback((e) => {
    setAuthor(e.target.value);
  }, []);
  const onBodyHandle = useCallback((e) => {
    setBody(e.target.value);
  }, []);
  const onSelectHandle = (e) => {
    const value = e.target.value;
    console.log(value);
    articleTimesFunc(value);
  };

  return (
    <section className="form__container">
      <form action="" method="get" className="form" onSubmit={onSubmit}>
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label htmlFor="name">Enter your name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={author}
              onChange={onAuthorHandle}
              required
            />
          </div>
          <div className="form__input--title">
            <label htmlFor="title">Enter your title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={onTitleHandle}
              required
            />
          </div>
          <div className="form__textbox">
            <label htmlFor="story">Your question</label>
            <textarea
              id="story"
              name="story"
              placeholder="질문을 작성하세요"
              value={body}
              onChange={onBodyHandle}
              required
            ></textarea>
          </div>
        </div>
        <div className="form__submit">
          <input type="submit" value="submit" />
        </div>
      </form>
      <select id="select-option" onChange={onSelectHandle}>
        <option value="">페이지에 나타나는 질문 갯수</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </section>
  );
};

export default SubmitComponent;

import "./App.css";
import DiscussionsList from "./components/DiscussionsList";
import { useState, useEffect, useCallback } from "react";
import SubmitComponent from "./components/SubmitComponent";
import PageList from "./components/PageList";

function App() {
  const [discussion, setDiscussion] = useState([]);
  const [articleTimes, setArticleTimes] = useState(10);
  const [renderArticle, serRenderArticle] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("http://localhost:4000/discussions/").then(
          (data) => data.json()
        );
        setDiscussion(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  const onDiscusstion = useCallback(
    (data) => {
      setDiscussion(data.concat(discussion));
    },
    [discussion]
  );
  const deleteDiscussion = useCallback(
    (id) => {
      console.log("deleteDiscussion");
      const newDiscussion = discussion.filter((ele) => ele.id !== id);
      setDiscussion(newDiscussion);
    },
    [discussion]
  );
  const renderArticleFunc = useCallback((id) => {
    serRenderArticle(id);
  }, []);
  const articleTimesFunc = useCallback((value) => {
    setArticleTimes(value);
  }, []);

  return (
    <main>
      <h1>My Agora States</h1>
      <SubmitComponent
        onDiscusstion={onDiscusstion}
        discussion={discussion}
        articleTimesFunc={articleTimesFunc}
      />
      <DiscussionsList
        discussion={discussion}
        deleteDiscussion={deleteDiscussion}
        renderArticle={renderArticle}
        articleTimes={articleTimes}
      />
      <PageList
        discussion={discussion}
        renderArticleFunc={renderArticleFunc}
        articleTimes={articleTimes}
      />
    </main>
  );
}

export default App;

import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Wrapper, Container, QuizSection } from "./Quiz.styles";
import QuizBlock from "./block/Block";
import Aside from "./aside/Aside";
import { ToastContainer, toast } from "react-toastify";
import ResultProvider from "../../context/ResultContext";
import { getQuizData } from "../../utils/local-storage-helper";
import PageNotFound from "../404-page";

const Quiz = () => {
  const data = useLoaderData();
  const localData = getQuizData(data.id);
  const notify = (type) => {
    if (type === "right") {
      toast.success("Correct!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (type === "") {
      toast.warn("Give all answer!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error("Wrong!", {
        position: toast.POSITION.TOP_CENTER,
        // icon: <CloseIcon color="#e74c3c" />,
      });
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (JSON.stringify(data) === "{}") {
    return <PageNotFound />;
  }
  return (
    <>
      <ResultProvider>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Wrapper>
          <Container>
            <Aside data={data} />
            <QuizSection>
              {data?.questions.map((question, i) => (
                <QuizBlock
                  notify={notify}
                  data={question}
                  key={i}
                  index={i}
                  localQuesData={localData ? localData[question.id] : null}
                />
              ))}
            </QuizSection>
          </Container>
        </Wrapper>
      </ResultProvider>
    </>
  );
};

export default Quiz;

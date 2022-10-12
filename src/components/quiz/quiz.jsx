import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Wrapper, Container, QuizSection } from "./Quiz.styles";
import QuizBlock from "./block/Block";
import Aside from "./aside/Aside";
import { ToastContainer, toast } from "react-toastify";
import ResultProvider from "../../context/ResultContext";

const Quiz = () => {
  const data = useLoaderData();
  const notify = (type) => {
    if (type === "right") {
      toast.success("Correct!", {
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
  return (
    <>
      <ResultProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
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
              {data.questions.map((data, i) => (
                <QuizBlock notify={notify} data={data} key={i} index={i} />
              ))}
            </QuizSection>
          </Container>
        </Wrapper>
      </ResultProvider>
    </>
  );
};

export default Quiz;

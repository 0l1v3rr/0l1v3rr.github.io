import Project from "./Project";

const Backend = () => {
  return (
    <>
      <Project
        project={{
          url: "https://github.com/0l1v3rr/bookstore-api?ref=0l1v3rr.github.io",
          title: "Bookstore API",
          description: "📑 A simple REST API that returns some sample data.",
          category: "backend",
          techStack: ["Go", "gorilla/mux", "MySQL"],
        }}
      />
    </>
  );
};

export default Backend;

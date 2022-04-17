// creates employee cards here section
const generateCards = (cards) => {
  if ((employeeType = "engineer")) {
    return `
        ${projectsArr
          .filter(({ employee }) => employee)
          .map(({ name, idNumber, email, github }) => {
            return `
            <section class="container col-lg-4 col-md-6 my-3">
            <div class="card">
            <header class="text-left bg-primary px-3 py-3 text-white">
                <h3 class="fw-bold">${name}</h3>
                <h5>Engineer</h5>
            </header>
            <div class="card-body">
                <ul class="list-group list-group-flush fs-6">
                    <li class="list-group-item fs-6">ID:${idNumber}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${github}">${github}</a></li>
                  </ul>
            </div>
        </div>
        </section>
          `;
          })
          .join("")}`;
  } else if ((employeeType = "manager")) {
    return `
                ${projectsArr
                  .filter(({ employee }) => employee)
                  .map(({ name, idNumber, email, officeNumber }) => {
                    return `
                    <section class="container col-lg-4 col-md-6 my-3">
                    <div class="card">
                    <header class="text-left bg-primary px-3 py-3 text-white">
                        <h3 class="fw-bold">${name}</h3>
                        <h5>Manager</h5>
                    </header>
                    <div class="card-body">
                        <ul class="list-group list-group-flush fs-6">
                            <li class="list-group-item fs-6">ID: ${idNumber}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">Office Number: ${officeNumber}</li>
                          </ul>
                    </div>
                </div>
                </section>
                  `;
                  })
                  .join("")}`;
  } else if ((employeeType = "student")) {
    return `
                ${projectsArr
                  .filter(({ feature }) => feature)
                  .map(({ name, idNumber, email, school }) => {
                    return `
                    <section class="container col-lg-4 col-md-6 my-3">
                    <div class="card">
                    <header class="text-left bg-primary px-3 py-3 text-white">
                        <h3 class="fw-bold">${name}</h3>
                        <h5>Intern</h5>
                    </header>
                    <div class="card-body">
                        <ul class="list-group list-group-flush fs-6">
                            <li class="list-group-item fs-6">ID:${idNumber}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">School ${school}</li>
                          </ul>
                    </div>
                </div>
                </section>
                  `;
                  })
                  .join("")}`;
  }
};

// export function to generate entire page
module.exports = (templateData) => {
  // destructure page data by section
  const {} = templateData;

  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </head>
    
    <body class="">
      <header class="bg-danger p-3 mb-2 text-white">
          <div class="container py-4">
              <h1 class="display-5 fw-bold text-center">
                  My Team
              </h1>
          </div>
      </header>
      <main class="d-flex justify-content-center">
          <div class=" container row">

      </div>
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2022 by Colin Christoph</h3>
      </footer>
    </body>
    </html>
    
    `;
};

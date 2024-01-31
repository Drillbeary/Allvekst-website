# Allvekst-website

This is the repository for the new Allvekst website. The website is built using React for the frontend and Node.js for the backend, providing a modern, responsive user experience.

## Architecture

The application is containerized using Docker, which ensures that it runs the same way in every environment. The Docker image includes both the React frontend and the Node.js backend, so the entire application can be run from a single container.

## Deployment

Deployment of the application is automated using GitHub Actions. When changes are pushed to the repository, the GitHub Actions workflow is triggered. This workflow builds a new Docker image of the application and pushes it to Docker Hub.

The Docker image is then deployed to Azure, where it is hosted and made accessible to users. The deployment process is fully automated, ensuring that the live application is always up-to-date with the latest changes in the repository.

## Technology Stack

- React: A JavaScript library for building user interfaces.
- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Docker: A platform to develop, ship, and run applications.
- GitHub Actions: CI/CD platform that helps automate tasks within the software development life cycle.
- Azure: A cloud computing service for building, testing, deploying, and managing applications and services.

For more information about the project and how to contribute, please refer to the documentation in the repository.

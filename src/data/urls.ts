export default {
  base: {
    local: 'http://localhost:4200/',
    stage: 'https://main.gig.us-east-1.stage.ext.mercer.com/',
  },
  backend: {
    local: 'https://localhost:3000/',
    stage: 'https://main.gig.us-east-1.stage.ext.mercer.com/api/v1/',
  },
  clients: {
    indigo: 'client/indigo/',
  },
  viewAllOfferings: 'offerings/',
  offerings: {
    base: 'offerings/',
    healthcare: 'offerings/606d91a9cf72104f54e0ddd9/',
    risk: 'offerings/606d973ed0bbdd8250d5263f/',
    homeOffering: 'offerings/606d983bd0bbdd8250d526d4/',
  },
  healthcareProducts: {
    dental: 'offerings/606d91a9cf72104f54e0ddd9/606da840d0bbdd8250d5317f',
    vision: 'offerings/606d91a9cf72104f54e0ddd9/606da875d0bbdd8250d531a5',
  },
  quizLinks: {
    ACAHealth: 'wizard?productCode=HEALTH%20ACA%20EXCHANGE',
  },
  quiz: 'wizard/',
  results: 'results/',
};

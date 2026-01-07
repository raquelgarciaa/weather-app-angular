# 🌤️ Weather App - Angular & AI Design

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

Uma aplicação de previsão do tempo moderna e minimalista desenvolvida com **Angular v17+**. O projeto foca na integração entre ferramentas de desenvolvimento web modernas e design gerado por Inteligência Artificial (Gemini).

---

## 📸 Preview do Design

<p align="center">
  <img width="100%" alt="Weather App Interface" src="https://github.com/user-attachments/assets/de9f9ffa-4250-4262-8272-9e7830ee1b18" />
</p>

## 🚀 Funcionalidades

- **Consulta em Tempo Real:** Integração direta com a API OpenWeatherMap.
- **Estética Glassmorphism:** Interface translúcida com efeitos de desfoque e gradientes vibrantes.
- **Design by AI:** Layout e paleta de cores concebidos através de engenharia de prompt no Google Gemini.
- **Dados Meteorológicos:**
  - Temperatura atual.
  - Variações de Mínima/Máxima.
  - Velocidade do vento.
  - Índice de umidade.

## 🛠️ Tecnologias

### **Frontend**
* **Angular:** Framework para construção da SPA.
* **Tailwind CSS:** Estilização baseada em utilitários e design responsivo.
* **TypeScript:** Tipagem forte para maior segurança no consumo da API.

### **Backend (Data Source)**
* **OpenWeather API:** Fornecimento de dados climáticos globais.

---

## 🔧 Como Executar o Projeto

### 1. Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado e a [Angular CLI](https://angular.io/cli).

### 2. Clonar o Repositório
```bash
git clone [https://github.com/seu-usuario/weather-app-angular.git](https://github.com/seu-usuario/weather-app-angular.git)
cd weather-app-angular
#### 3. Instalar Dependências
```bash
npm install
### 4. Configurar a API Key
Crie ou edite o arquivo src/environments/environment.ts e adicione sua chave da OpenWeatherMap:
```bash
TypeScript

export const environment = {
  production: false,
  weatherApiKey: 'SUA_CHAVE_AQUI'
};
### 5. Rodar a Aplicação
```bash
ng serve
Acesse http://localhost:4200/ no seu navegador.

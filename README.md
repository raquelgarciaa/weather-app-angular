🌤️ Weather App - Angular & AI Design
Uma aplicação de previsão do tempo moderna e minimalista, desenvolvida com Angular e estilizada com Tailwind CSS. O design foi concebido através de inteligência artificial (Gemini), focando em uma experiência de usuário limpa com estética Glassmorphism.

<p align="center"> <img width="700" alt="Weather App Interface" src="https://github.com/user-attachments/assets/de9f9ffa-4250-4262-8272-9e7830ee1b18" /> </p>

🚀 Funcionalidades
Busca em tempo real: Pesquise por qualquer cidade do mundo.

Dados Detalhados: * Temperatura atual com destaque visual.

Variações de Temperatura (Mínima e Máxima).

Indicadores de Umidade e Velocidade do Vento.

Design Responsivo: Adaptável para dispositivos móveis, tablets e desktop.

Interface Glassmorphism: Efeito de vidro fosco utilizando utilitários avançados do Tailwind.

🛠️ Tecnologias Utilizadas
Front-end
Angular: Framework principal para SPA (Single Page Application).

Tailwind CSS: Framework CSS utility-first para estilização rápida e responsiva.

Lucide Icons / Heroicons: (Opcional, se estiver usando ícones para vento/umidade).

Back-end & API
OpenWeatherMap API: Consumo de dados meteorológicos globais em tempo real.

Gemini AI: Utilizado como parceiro de pensamento para a concepção do layout e estrutura do código CSS.

🔧 Instalação e Configuração
Pré-requisitos
Node.js (v18+)

Angular CLI (npm install -g @angular/cli)

Uma chave de API da OpenWeatherMap

Passo a Passo
Clone o repositório:

Bash

git clone https://github.com/seu-usuario/weather-app-angular.git
cd weather-app-angular
Instale as dependências:

Bash

npm install
Configure a API Key: No arquivo src/environments/environment.ts, adicione sua chave:

TypeScript

export const environment = {
  production: false,
  apiKey: 'SUA_CHAVE_AQUI'
};
Inicie o servidor de desenvolvimento:

Bash

ng serve
Acesse: http://localhost:4200

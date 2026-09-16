# SAP Ecosystem Mock Web (Spartacus Storefront Simulation)

## 📌 Sobre o Projeto
Esta aplicação front-end foi desenvolvida para atuar como a camada de apresentação (Storefront) de um ecossistema de e-commerce corporativo, simulando o papel do SAP Spartacus em uma arquitetura Headless. 

O sistema é totalmente desacoplado e consome os dados e regras de negócio provenientes da API RESTful desenvolvida em Spring Boot, demonstrando a separação de responsabilidades exigida em integrações complexas.

## 🎨 UI/UX e Decisões de Design
Em vez de focar em elementos visuais de varejo genérico, a interface foi construída seguindo diretrizes de **design institucional e estrutural**. A tipografia de alto contraste e a ausência de ruídos visuais transmitem solidez e facilitam a escaneabilidade dos dados integrados com o ERP (S/4HANA).

## 🛠️ Stack Tecnológica
* **Angular 17+:** Framework principal operando com a moderna arquitetura de *Standalone Components* (sem necessidade de NgModules).
* **SCSS (Sass):** Estilização modular e escalável.
* **Fetch API nativa:** Integração assíncrona com o middleware (Spring Boot) para consumo do catálogo de produtos.

## 🚀 Como Executar

```bash
# Clone o repositório
git clone [https://github.com/matheusfolle/amazon-clone-web.git](https://github.com/matheusfolle/amazon-clone-web.git)

# Acesse o diretório do projeto
cd amazon-clone-web

# Instale as dependências
npm install

# Suba o servidor de desenvolvimento
ng serve -o
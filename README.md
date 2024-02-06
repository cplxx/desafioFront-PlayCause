<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://play.foracause.com.br/wp-content/uploads/2023/10/cropped-PFAC_Logo-5_page-0003.jpg" width="200" alt="play a cause logo" /></a>
</p>



  <p align="center">Bem-vindo ao frontend do teste técnico de um chat em tempo real fornecido para "Play For A Cause"! Este repositório contém a implementação do website utilizando  ReactJS, NextJs, Typescript, Zustand, React-Hook-Form, Zod, tailwindCss e shadcn  .</p>



## Tecnologias Principais

React e NextJS: Bibliotecas para construção de interfaces de usuário e desenvolvimento web. <br>
TailwindCSS: Framework CSS utilitário para estilização rápida e consistente. <br>
Zustand: Biblioteca para gerenciamento de estado no React. <br>
Axios e React Query: Para manipulação de requisições HTTP e gerenciamento de estado relacionado a dados.

## Próximas Features e Melhorias
Melhoria visual da interface do usuário.<br>
Implementação da funcionalidade de mensagens favoritas persistente.<br>
Adição da opção para os usuários editarem seus perfis.<br>
Criação da página inicial com visão geral e navegação eficiente.

##
OBS: Perante o deploy da API no servidor grátis da render pode ter um pequeno delay nas operações, se achar melhor pode testar localmente!







curl https://api.openai.com/v1/chat/completions \
 -H "Authorization: Bearer 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" \
 -H "Content-Type: application/json" \
 -d '{
 "model": "gpt-4-turbo-preview",
 "messages": [{"role": "user", "content": "What is the OpenAI mission?"}] 
 }'
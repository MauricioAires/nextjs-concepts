# Resume

## O que é SSR

SSR processa o HTML,no servidor, enviado páginas prontas para o navegador. Ideal para SEO e tempo de carregamento inicial rápido.

## CSR - Interatividade e SPA

A renderização é feita do lado do cliente, ideal para SPA que precisa de interatividade sem recarregar a página.

## Qual é o padrão de carregamento do NextJs

O SSR proporcionando melhor desempenho em SEO e tempo de carregamento inicial.

## O que é NextJs e CSR Híbrido

O NextJs permite carrar dados no cliente após o carregamento da página inicial, combinando SSR com CSR

Escolher entre SSR e CSR depende de fatores de necessidade de SEO, tempo de carregamento e interatividade do cliente.

## Como funciona o File Based Routing

O NextJs utiliza um roteador baseado na estrutura de arquivos e pastas. Cada pasta no diretório app representa um segmento da rota.

## Conceito de rotas dinâmicas

São usadas quando os nomes exatos dos segmentos não são conhecidos e precisa
ser criados de dados dinâmicos

Como criar a rot

[id] [slug] app/blog/[slug]

## Leitura de Query String da URL

Utiliza-se o hook useSearchParams o que retorna apenas dados de leitura

as principais funções do hook useSearchParams é o .get() retorna o primeiro valor do parâmetro e o segundo é o .has() que verifica se existe o parâmetro na URL.

## Nested routes

São rotas aninhadas, basically folders within folders

## Definição de layouts

Layout é uma UI compartilha entre múltiplas rotas, os layouts preservam
o estado e não são re-renderizados, os layouts também podem ser aninhados

## Nesting Layouts

Layouts aninhados, por exemplo layout raiz é o layout de dashboard

Mas somente o layout raiz pode conter as tags body and html.
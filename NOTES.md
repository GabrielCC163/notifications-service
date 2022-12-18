### VSCode extensions
* Prisma
* ESLint (editor.codeActionsOnSave: {source.fixAll.eslint: true})

## Inversão de dependência
Quando uma classe recebe suas dependências através do construtor. Quem instancia a classe informa suas dependências.
Quem está dizendo como a notificação será persistida não é o próprio caso de uso, mas sim quem chama ele.

Ex: AppController recebe AppService.

## Injeção de dependência
O Nest automatiza a inserção das dependências no momento em que as classes forem instanciadas. A classe precisa ter o decorator @Injectable().

## Prisma setup
npm i prisma -D
npm i @prisma/client
npx prisma init --datasource-provider SQLite
Create the model into schema.prisma
Create and run the migration: npx prisma migrate dev
npx prisma studio

## SOLID > S > Single responsability
ex: use-cases/send-notification.ts

## Repository Pattern
Recebe as chamadas do caso de uso e persiste no banco.

## Check for TS erros
npx tsc --noEmit

## Patterns
### Mapper
### Factory
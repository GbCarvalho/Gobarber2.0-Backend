# Recuperação de senha

**RF**

- [ ] O usuário deve poder recuperar sua senha informando o seu email
- [ ] O usuário deve receber um email com as instruções para a recuperação da sua senha
- [ ] O usuário deve poder resetar sua senha;

**RNF**

- [ ] Utilizar MailTrap para testar envios em ambiente dev;
- [ ] Utilizar Amazon SES para envios em produção;
- [ ] O envio de emails deve acontecer em segundo plano (background job);

**RN**

- [ ] O link enviado para resetar a senha, deve expirar em 2h;
- [ ] O usuário precisa confirmar sua senhar ao resetá-la;


# Atualização do perfil

**RF**

- [ ] O usuário deve ser capaz de alterar seu usuário, email e senha;


**RN**

- [ ] O usuário não pode alterar seu email para um email já utilizado;
- [ ] Para atualiazar sua senha, o usuário deve informar a senha antiga;
-

# Painel do Prestador

**RF**

- [ ] O usuário deve poder listar seus agendamentos de um dia específico
- [ ] O prestador deve receber uma notificação sempre que houver um novo agendamento;
- [ ] O prestador deve poder visualizar as notificações não lidas

**RNF**

- [ ] Os agendamentos do prestador no dia devem ser armazenados em cache;
- [ ] As notificações do prestador devem ser armazenadas no MongoDB;
- [ ] As notificações do prestador devem ser enviadas em tempo real utilizando Socket.IO;

**RN**

- [ ] A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- [ ] O usuário deve poder listar todos prestadores de serviço cadastrados;
- [ ] O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- [ ] O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- [ ] O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- [ ] A listagem de prestadores deve ser armazenada em cache;

**RN**

- [ ] Cada agendamento deve durar uma hora exatamente;
- [ ] Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro as 8h, último as 17h)
- [ ] O usuário não pode agendar em um horário já ocupado;
- [ ] O usuário não pode agendar em um horãrio que já passou;
- [ ] O usuário não pode agendar serviços consigo mesmo;

# Rezet_TT
Для запуска проекта:

1. Склонировать проект на свой ПК, выполнив команду в терминале IDE git clone https://github.com/Sergio314/Rezet_TT.git
2. Установить модули в папке client, выполнив команды в новой сессии терминала :
                                                        cd client
                                                        npm install
3. Установить модули в папке server, выполнив команды в новой сессии терминала:
                                                        cd server
                                                        npm install 
4. Создать базу данных postgres через терминал, выполнив команды в терминале:
    sudo su postgres,
    psql
    CREATE DATABASE products;
5. Выполнить команду npx sequelize db:migrate
6. Выполнить команду npx sequelize db:seed:all
7. Запустить сервер, выполнив команды в терминале:
                            npm run server
8. Запустить клиент, выполнив команды в терминале:
                            npm run client
9. В браузере запустится вкладка с адресом localhost:3000. 
10. Страница Cart доступна по адресу localhost:3000/cart
11. Страница Shipping доступна по адресу localhost:3000/shipping, но переход с /cart на /shipping осуществляется после нажатия по кнопке Buy страницы Cart.




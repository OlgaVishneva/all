#### Тестовый домен: 
> https://sova-frontend-test.itcomp.tech/

#### Prod домен: 
> sova-trading.com

#### Начало работы:
1. > Скопировать файл `.env.example` командой ниже и при необходимости изменить порт в `.env`
```
cp .env.example .env
```
2. > Запустить для установки пакетов [escobar](https://confluence.sovcombank.ru/pages/viewpage.action?pageId=285690905)

___

#### Для сборки в dev режиме выполнить по-порядку:   
1. > `docker compose build`
2. > `docker compose run --rm node npm ci`
3. > `docker compose up`
___

### Страница с выводом html-страниц в проекте:
**Доступна по адресу**
```
http://localhost:3013/pages.html
```
___

#### Для prod сборки в режиме просмотра выполнить по-порядку:
1. > `docker compose run --rm node npm run build`
2. > `docker compose run --rm --service-ports node npm run preview`
___

#### Собрать prod архив для заказчика:
1. > `docker compose run --rm node npm run build-local`
___

#### Для prod сборки в выполнить команду:   
1. > `docker compose run --rm node npm run build`
___

#### Для ручного запуска prod версии docker билда:  
1. > `docker build -t someImageName -f ci-cd-files/Dockerfile .`
2. > `docker run -d --name containerName -p 3013:3013 someImageName`

### Запуск stylelint для проверки scss файлов.
1. > `docker compose run --rm node npm run lint`

### Запуск prettier для проверки и форматирования Js файлов.
1. > `docker compose run --rm node npm run format`

### Убиваем все активные контейнеры.
1. > `docker kill $(docker ps -q)`

#### Описание плагинов сборки, для чего используются:
+ > `cssInline` - добавление стилей в тег style, параметр inline в vite.config.js
+ > `customHmr` - HMR, автоматическая перезагрузка страниц при изменении html-файлов
+ > `generateLinkPages` - Собирает страницу pages.html с ссылками на другие html страницы в проекте
+ > `imageConverter` - Конвертирует png / jpg изображения в webp, avif
+ > `logCustomMessages` - Выводит заданные сообщения в терминал
+ > `multiInputs` - Автоматическое подключение html страниц в конфиг 
+ > `previewHtml` - Для выполнения команды build-preview и корректного подключения файлов при локальном просмотре
+ > `svgSrite` - собирает svg иконки в спрайт, создает файл sprite.svg

#### Описание как корректно указывать пути к файлам в проекте:
+ > В сборке используются всегда относительные пути, по умолчанию установлен `base: "./"`

1. В html файлах корректное подключение файлов выглядит так: 
+ > `/img/picture.png` - Указываем в начале символ `/`
+ > `files/text.pdf` - Не указываем `/` в начале
+ > `/fruits.png` - Для картинок в папке public, добавляем в начале символ `/`

2. В scss файлах корректное подключение картинок и шрифтов выглядит так:
+ > `/img/bg-picture.jpg` - Указываем в начале символ `/`
+ > `/fonts/roboto/Roboto-Regular.woff` - Указываем в начале символ `/`
+ > `/fruits.png` - Для картинок в папке public, добавляем в начале символ `/`
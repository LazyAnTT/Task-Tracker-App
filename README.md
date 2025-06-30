Instructions for setting up locally:

1) Clone project:
git clone https://github.com/LazyAnTT/Task-Tracker-App.git

2) Install via composer
composer install

3) Copy this.env file

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=task_tracker
DB_USERNAME=lazyant
DB_PASSWORD=123

4) Generate seed and serve
php artisan key:generate
php artisan migrate --seed
php artisan serve
It will run at: http://localhost:8000

5) Run frontend locally:
cd frontend
npm install
npm run dev

6) test

I have managed to do can be seen in commit messages. Run out of time, because lost a lot of time on setting up front-end.

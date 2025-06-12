FROM php:8.2-fpm

# إعدادات عامة
WORKDIR /var/www

# تثبيت المتطلبات
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip \
    libpng-dev libjpeg-dev libfreetype6-dev \
    libonig-dev libxml2-dev \
    curl git \
    && docker-php-ext-install pdo_mysql mbstring zip exif pcntl bcmath gd

# تثبيت composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# نسخ الملفات
COPY . .

# تثبيت الباكجات
RUN composer install

# تشغيل php-fpm
CMD ["php-fpm"]

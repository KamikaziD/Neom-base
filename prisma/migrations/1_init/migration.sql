-- CreateTable
CREATE TABLE `neom_access_logs` (
    `user` VARCHAR(255) NOT NULL,
    `action` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `neom_regions` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `region_name` VARCHAR(255) NOT NULL,
    `region_code` VARCHAR(255) NOT NULL,
    `active` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,
    `region_type` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `neom_user_regions` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `region_id` BIGINT NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `neom_user_regions_user_id_key`(`user_id`),
    UNIQUE INDEX `neom_user_regions_region_id_key`(`region_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `neom_users` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `designation` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `access_level` VARCHAR(255) NOT NULL,
    `region` VARCHAR(255) NOT NULL,
    `tag` VARCHAR(255) NOT NULL,
    `active` INTEGER NOT NULL DEFAULT 1,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `neom_user_regions` ADD CONSTRAINT `neom_user_regions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `neom_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `neom_user_regions` ADD CONSTRAINT `neom_user_regions_region_id_fkey` FOREIGN KEY (`region_id`) REFERENCES `neom_regions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;


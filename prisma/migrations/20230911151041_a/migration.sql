/*
  Warnings:

  - Made the column `description` on table `gyms` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cnpj` on table `gyms` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cpf` on table `instructors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cpf` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `instructors_gym_id_fkey` ON `instructors`;

-- DropIndex
DROP INDEX `users_gym_id_fkey` ON `users`;

-- AlterTable
ALTER TABLE `gyms` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `cnpj` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `instructors` MODIFY `cpf` VARCHAR(191) NOT NULL,
    MODIFY `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` MODIFY `cpf` VARCHAR(191) NOT NULL,
    MODIFY `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `instructors` ADD CONSTRAINT `instructors_gym_id_fkey` FOREIGN KEY (`gym_id`) REFERENCES `gyms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

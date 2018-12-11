exports.up = function(knex, Promise) {
    // When creating migrations, you must ALWAYS return
    // the result of your migration code. ALWAYS!
    return knex.schema.createTable("clucks", table => {
        // CREATE TABLE "posts" (
        table.increments("id"); // "id" SERIAL
        table.string("username"); // "username" VARCHAR(255)
        table.string("image_url"); // "image_url" VARCHAR(255)
        table.string("content"); // "content" VARCHAR(255)
        table.timestamp("createdAt").defaultTo(knex.fn.now());
        table.timestamp("updatedAt").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("clucks"); // Roll back
};
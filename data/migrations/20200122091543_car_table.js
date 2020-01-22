
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('carID');
        tbl.string('vin', 128).unique().notNullable();
        tbl.string('make', 128);
        tbl.string('model', 128);
        tbl.integer('mileage');
        tbl.string('transmission', 128);
        tbl.string('title', 128);
        tbl.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};

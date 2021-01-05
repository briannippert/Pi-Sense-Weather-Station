CREATE TABLE weather (
    id          INT      PRIMARY KEY,
    pressure    DOUBLE,
    humidity    DOUBLE,
    temperature DOUBLE,
    time_dt     DATETIME
);

INSERT INTO weather (pressure, humidity, temperature, time_dt) VALUES (1024.1, 54.5, 32.0, datetime('now'));
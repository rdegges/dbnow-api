CREATE TABLE IF NOT EXISTS apps (
    id      TEXT PRIMARY KEY,
    name    TEXT NOT NULL CHECK (name <> ''),
    region  TEXT NOT NULL CHECK (region <> '')
);

CREATE TABLE IF NOT EXISTS dbs (
    id          TEXT PRIMARY KEY,
    type        TEXT NOT NULL,
    app_id      TEXT REFERENCES apps ON DELETE SET NULL,
    url         TEXT NOT NULL CHECK (url <> ''),
    created     TIMESTAMP WITH TIME ZONE DEFAULT (NOW()),
    destroyed   TIMESTAMP WITH TIME ZONE,
    ttl         SMALLINT DEFAULT 1
);

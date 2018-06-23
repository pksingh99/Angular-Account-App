CREATE TABLE
    account
    (
        id BIGINT NOT NULL,
        first_name VARCHAR,
        surname VARCHAR,
        account_number VARCHAR,
        PRIMARY KEY (id)
    );

CREATE TABLE
    hibernate_sequence
    (
        next_val BIGINT
    );

INSERT INTO account (id, first_name, surname, account_number)
  VALUES (1, 'Joe', 'Bloggs', '1234');
INSERT INTO account (id, first_name, surname, account_number)
  VALUES (2, 'John', 'Smith', '1235');
INSERT INTO account (id, first_name, surname, account_number)
  VALUES (3, 'Jane', 'Smith', '1236');

INSERT INTO hibernate_sequence (next_val) VALUES (4);
# docker-container-connection

```
CREATE TABLE cadastro (
	id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
	email text NOT NULL UNIQUE,
	name varchar(40) NOT NULL,
	created_at timestamptz NOT NULL CONSTRAINT user_created_gen DEFAULT now(),
	updated_at timestamptz,
	deleted_at timestamptz
);
```
# HW2-Configuration Management

**Basic Requirements**

> Installing Ubuntu Server 18.04 LTS
```
Role - [upgrade](https://github.ncsu.edu/uschatto/HW2-DevOps/tree/master/cm/roles/upgrade/tasks)
```

> Installing MySQL Database Server
```
Role - [mysql](https://github.ncsu.edu/uschatto/HW2-DevOps/tree/master/cm/roles/mysql/tasks)
```

> Installing Mattermost Server
```
Role - [mattermost](https://github.ncsu.edu/uschatto/HW2-DevOps/tree/master/cm/roles/mattermost/tasks)
```

**Extra Requirements**

> Automate creation of teams and users
```
Role - [team](https://github.ncsu.edu/uschatto/HW2-DevOps/tree/master/cm/roles/team/tasks)
```

> Enable email notifications
```
Role - [email](https://github.ncsu.edu/uschatto/HW2-DevOps/tree/master/cm/roles/email/tasks)
```

> Configuring NGINX as a proxy for Mattermost Server
```
Role - [nginxproxy](https://github.ncsu.edu/uschatto/HW2-DevOps/tree/master/cm/roles/nginxproxy/tasks)
```

> Configuring NGINX with SSL and HTTP/2
```
Role - [nginxssl](https://github.ncsu.edu/uschatto/HW2-DevOps/tree/master/cm/roles/nginxssl/tasks)
```

**Ansible Vault**

> cm playbook cm/playbook.yml cm/inventory.ini --vaultpass <VAULT_PASSWORD>

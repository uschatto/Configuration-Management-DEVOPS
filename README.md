# HW2-Template

### Get started

Clone this repo:

```bash
git clone https://github.ncsu.edu/csc-devops-staff/hw2
```

Create a private `HW1-DevOps` GitHub repo, change the remote url of the repo you just cloned, and push:

```bash
git remote set-url origin https://github.ncsu.edu/<unityid>/HW1-DevOps
git push
```

Install the node.js packages.

```
npm install
npm link
```

Now you can run `cm` commands, but it currently doesn't do anything (you need to implement hw2 here):

```bash
$ cm install-server
# output: Hi there!
```

Now you have a copy of this template repo in your hw2 repository. Make the [necessary changes](link_to_hw_description) to complete the hw.

### Submission requirements

- You should be able to run `cm install-server` on a new machine, and successfully run your hw2 to completion.
- The VMs you create should have host-only network with these ip addresses:
    - **ansible**: 192.168.44.76
    - **webserver**: 192.168.44.77

#### Check progress

You can check your progress by running:
```bash
opunit verify -i ../test/inventory.yml -c ../test/opunit.yml
```

### What is in this template repo

Similar to hw1 (V), here you have a cli node app called `cm`. The commands are defined in `./commands` directory, and your configuration management (Ansible) scripts are to be added in `./cm`. 

In `./cm` we included a template for the files you will need (`playbook.yml`, and `inventory.ini`), as well as an example for Ansible roles (`./cm/roles/ping`). 

## Linux Filesystem
The Linux filesystem structure is somewhat different from that of Windows. Linux doesn’t have a physical drive (such as the C: drive) at the base of the filesystem but uses a logical filesystem instead. At the very top of the filesystem structure is `/`, which is often referred to as the `root` of the filesystem, as if it were an upside-down tree
```bash
$ tree / -L 1
/
├── root
├── boot
├── etc
├── home
├── mnt
├── proc
├── sys
├── dev
├── bin
├── sbin
├── lib
├── usr
├── bin -> usr/bin
├── sbin -> usr/sbin
├── lib -> usr/lib
├── var
├── tmp
.
.
.
```
The root (`/`) of the filesystem is at the top of the tree, and the following are the most important subdirectories to know:
- `/root`: The home directory of the all-powerful root user
- `/etc`: Generally contains the Linux configuration files—files that control when and how programs start up
- `/home`: The user’s home directory
- `/mnt`: Where other filesystems are attached or mounted to the filesystem
- `/media`: Where CDs and USB devices are usually attached or mounted to the filesystem
- `/bin`: Where application binaries (the equivalent of executables in Microsoft Windows) reside
- `/lib`: Where we’ll find libraries (shared programs that are similar to Windows DLLs)
- `/boot`: Where the static bootloader and kernel executable and configuration files (required to boot a Linux computer) resides
- `/opt`: Optional files such as vendor supplied application programs should be located here
- `/dev`: This directory contains the device files for every hardware device attached to the system
- `/sbin`: System binary files
- `/tmp`: Temporary directory used by the OS and many programs to store temporay files (Note that files stored here maybe deleted at any time without prior notice)
- `/usr`: These are shareable, read-only files, including executable binaries and libraries, man files, and other types of documentation
- `/var`: Variable data files are stored here. This can include things like log files, MySQL, and other database files, web server data files, email inboxes, and much more

Read this to learn more about Linux filesystem: [An introduction to Linux filesystems](https://opensource.com/life/16/10/introduction-linux-filesystems)

## Basic Commands in Linux
To begin,  let’s look at some basic commands that will help us get up and running in Linux. (Note: to know the command in full extend use `man` or `--help`)
- Finding ourself with `pwd`
```bash
# returns the current location in filesystem structure
$ pwd
/home/user
```
- Checking our login with `whoami`
```bash
# returns which user is logged in
$ whoami
```
- Changing directories with `cd`
```bash
# to navigate to /etc directory from current directory
$ cd /etc
/etc $

# to move up one level in the file structure
/etc $ cd ..
$

# to go back to the previous directory 
$ cd -
/etc $
```
- Listing the contents of a directory with `ls`
```bash
# list all contents in current directory
$ ls
bin media run var boot mnt
sbin lib dev opt srv usr

# list all contents in a particular directory
$ ls /etc
bash fish xyz

# to get more info about the files and directories (long listing '-l'), such as their permissions, owner, size and when they were last modified
$ ls -l
total 52
drwxrwxr-x  3 xyz xyz 4096 জানু      22 14:43 blog
drwx------  2 xyz xyz 4096 ডিসেম্বর   8 20:40 Desktop
drwxrwxr-x  4 xyz xyz 4096 মে       20 20:23 Downloads
--snip--
drwx------  3 xyz xyz 4096 মার্চ     24 23:29 snap
-rw-rw-r--  1 xyz xyz 1940 মে        7 13:20 storage.md

# to show hidden files along with visible ones
$ ls -a

# we can combine the command
$ ls -la
```
- getting help with `--help`
```bash
# to get guidance to use any command use 'command --help'
$ ls --help
```
- Referencing manual pages with `man`
```bash
# to the help switch, most commands and applications have a manual (man) page with more information
$ man ls
```
- Finding binaries with `whereis`
```bash
# returns not only the location of the binary but also its source and man page if they are available
$ whereis bash
bash: /usr/bin/bash /usr/share/man/man1/bash.1.gz
```
- Finding binaries in the `PATH` variables with `which`
```bash
#  it only returns the location of the binaries in the PATH variable in Linux
$ which ls
/usr/bin/ls
```
- Performing more powerful searches with `find`
```bash
# The find command is the most powerful and flexible of the searching utilities. It is capable of beginning the search in any designated directory and looking for a number of different parameters, including, of course, the filename but also the date of creation or modification, the owner, the group, permissions, and the size.

# Here is the basic syntax for find: `find directory options expression`

# to search for a file with the name 'ls' starting the search in the 'usr' directory
$ find /usr -type f -name ls
/usr/lib/klibc/bin/ls
/usr/bin/ls

# we can also use wildcards to represent the file name,  Wildcards come in a few different forms: * . , ? and []
$ find /etc -type f --name apache2.*
/etc/apache2/apache2.conf
```
- Filtering with `grep`
```bash
# Very often when using the command line, we will want to search for a particular keyword. For this, we can use the grep command as a filter to search for keywords
$ ps aux | grep xyz
xyz    86625  0.0  0.0   6960  2364 pts/2    S+   21:10   0:00 grep --color=auto xyz
```
- Creating, Opening and Modifing files with `cat`
```bash
# The cat command followed by a filename will display the contents of that file, but to create a file, we follow the cat command with a redirect, denoted with the > symbol, and a name for the file we want to create.
$ cat > skills
Skill is valuable!!!

# When we press ENTER, Linux will go into interactive mode and wait for us to start entering content for the file. This can be puzzling because the prompt disappears, but if we simply begin typing, whatever we enter will go into the file (in this case, skills). Here, I entered Skill is valuable!!!. To exit and return to the prompt, I press CTRL-D. Then, when I want to see what’s in the file skills, I enter the following:
$ cat skills

# to add or append more content we use double redirect (>>)
$ cat >> skills
Everyone should increase skills.

$ cat skills
Skill is valuable!!! Everyone should increase skills.
```
- Creating files with `touch`
```bash
$ touch newFile
```
- Creating directory with `mkdir`
```bash
$ mkdir newDir

# we can create multiple directories
$ mkdir dir1 dir2 dir3

# we can create a dir in non-existing directory, let say we don't have tmp directory but we want to create dir directory in tmp directory
$ mkdir -p tmp/data/dir
```
- Copying a file with `cp`
```bash
#  creates a duplicate of the file in the new location and leaves the old one in place

# we’ll create the file oldfile in the root directory with touch and copy it to /root/newdirectory, renaming it in the process and leaving the original oldfile in place

$ touch oldfile
$ cp oldfile /root/newdirectory/newfile

# Renaming the file is optional and is done simply by adding the name we want to give it to the end of the directory path. If we don’t rename the file when we copy it, the file will retain the original name by default.
```
- Renaming a file with `mv`
```bash
# mv command can be used to move a file or directory to a new location or simply to give an existing file a new name. To rename newfile to newfile2
$ mv newfile newfile2
```
- Removing a file with `rm`
```bash
# To remove a file, we can simply use the rm command
$ rm newfile2
```
- Removing a directory with `rm`
```bash
# to remove a directory and its content all in one go, we can use the -r switch after rm
$ rm -r newdirectory
```

## Text Manipulation
In Linux, nearly everything we deal with directly is a file, and most often these will be text files; for instance, all configuration files in Linux are text files. So to reconfigure an application, we simply open the configuration file, change the text, save the file, and then restart the application—our reconfiguration is complete. With so many text files, manipulating text becomes crucial in managing Linux and Linux applications. 

- Viewing Files with `cat`
```bash
# to display data.txt found in /etc
$ cat /etc/data.txt
```

Lets assume the `data.txt` contains a lots of data. Now our screen will display the entire `data.txt` file, which will stream until it comes to the end of the file. This isn’t the most convenient or practical way to view and work with this file.

- Taking the Head with `head`
```bash
# By default, this command displays the first 10 lines of a file
$ head /etc/data.txt

# to display definite number of lines pass the line value by dash(-)
$ head -20 /etc/data.txt
```

- Grabbing the Tail with `tail`
```bash
# By default, this command displays the last 10 lines of a file
$ tail /etc/data.txt

# to display definite number of lines pass the line value by dash(-)
$ tail -20 /etc/data.txt
```

- Numbering the lines with `nl`
```bash
# to display a file with line numbers
$ ns /etc/data.txt
```

- Filtering Text with `grep`
```bash
# to see all lines to see the lines that include the word 'output'
$ cat /etc/data.txt | grep output
```

- Find and Replace with `sed`
```bash
# sed means stream editor which lets us to search for occurences of a word or a text pattern and then perform some action on it.
$ sed s/network/Network/g /etc/data.txt > data-2.txt

# The s command performs the search: we first give the term we are searching for (network) and then the term we want to replace it with (Network), separated by a slash (/). The g command tells Linux that we want the replacement performed globally. Then the result is saved to a new file named 'data-2.txt'.

# If we want to replace only the first occurence of the term 'network'
$ sed s/network/Network/ /etc/data.txt > data-2.txt

# If we want to replace only the second occurrence 
$ sed s/network/Network/2 /etc/data > data-2.txt
```

- Viewing Files with `more` and `less`
```bash
# to display a page of a file at a time and lets us page down through it using the 'ENTER' key
$ more /etc/data.txt


# The less command is very similar to more, but with additional functionality—hence, the common Linux aficionado quip, “Less is more.” With less, we can not only scroll through a file at our leisure, but we can also filter it for terms. As in Listing 2-8, open data.txt with less.
$ less /etc/data.txt

# we can filter by using the slash(/)
/network
```


## Exercise??
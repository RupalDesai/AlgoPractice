/*

This is your coding interview problem for today.

This problem was asked by Google.

Suppose we represent our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

dir
    subdir1
    subdir2
        file.ext

The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext

The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

Note:

The name of a file contains at least a period and an extension.

The name of a directory or sub-directory will not contain a period.

*/
/*
Solution

Build a file system object that would parse dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext into

{
    "dir": {
        "subdir1": {
            "file1.ext": True,
            "subsubdir1": {}
        },
        "subdir2": {
            "subsubdir2": {
                "file2.ext": True
            }
        }
    }
}

Then we can traverse every dir and retrieve the longest path recursively
*/

function build_fs(str: string) {

    let fs = {};
    //split into a directories
    let dir = str.split('\n');
    //This will track the latest folder
    let cur_path = [dir[0]];
    //Initialise the first directory in file system object
    fs[dir[0]] = {};

    for (let i = 1; i < dir.length; i++) {
        //Split each directory into subdirectories
        let subdir = dir[i].split('\t');
        // count the no of subdirectories
        let noOfSubdir = subdir.length - 1;

        //new directory or file
        let file = subdir[noOfSubdir];

        //traverse the fs to reach the current directory
        let cur_node = fs;
        for (let j = 0; j < noOfSubdir; j++) {
            cur_node = cur_node[cur_path[j]];
        }
        //Is a files 
        if (file.indexOf('.') > 0) {
            //add the file to current directory
            cur_node[file] = true;
        } else {
            //is a directory add the directory to the current directory and reset the current path to point the sub directory
            cur_node[file] = {};
            cur_path[noOfSubdir] = file;
        }

    }
    return fs;
}


function longest_path(fs) {
    let maxpath = '';
    if (fs !== undefined) {
        //For each dir in the fs
        Object.keys(fs).forEach(key => {
            let path = ''

            // If its a file
            if (key.indexOf('.') > 0) {
                path = key;
            }
            //If its a directory recurisvely fetch the longest path
            else {
                path = key + '/' + longest_path(fs[key]);
            }
            //When the path contains a file, if if the path is greater than current max path
            if (path.indexOf('.') > 0) {
                maxpath = maxpath.length > path.length ? maxpath : path;
            }

        });
    }
    return maxpath;
}
console.log(longest_path(build_fs("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\t\t\tfile23.ext\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext")));

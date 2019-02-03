#1.Find out how many tasks are in the task table

select count(id) from task;

#2.Find out how many tasks in the task table do not have a valid due date

select count(id)
from task 
where due_date is null;

#3.Find all the tasks that are marked as done

select* from task
join status on task.status_id = status.id
where status.name = 'done';

#4.Find all the tasks that are not marked as done
select* from task
join status on task.status_id = status.id
where status.name != 'done';

#5.Get all the tasks, sorted with the most recently created first

select task.title, task.created
from task
order by created desc;

#6.Get the single most recently created task
select task.title, task.created
from task
order by created desc
limit 1;

#7.Get the title and due date of all tasks where the title or description contains database
select task.title, task.due_date
 from task Where title like "%database%" or description like "%database%";

#8Get the title and status (as text) of all tasks
select task.title, task.status
from task;

#9Get the name of each status, along with a count of how many tasks have that status
select status.name,
count(task.status_id)
from task 
join status on task.status_id = status.id
group by task.status_id;



#10 Get the names of all statuses, sorted by the status with most tasks firs
select status.name,
count(task.status_id)
from task 
join status on task.status_id = status.id
group by task.status_id desc;

#Or
select status.name, count(status.name) as number_of_status
from status as status join task on status.id=task.status_id
group by status.id
order by number_of_status desc;




describe task;


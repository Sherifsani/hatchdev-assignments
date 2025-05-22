// Task.
class Task {
  private static nextId = 1;
  public readonly id: number;
  public description: string;
  public completed: boolean;
  public dueDate: Date;

  constructor(description: string, dueDate: Date) {
    this.id = Task.nextId++;
    this.description = description;
    this.completed = false;
    this.dueDate = dueDate;
  }

  complete(): void {
    this.completed = true;
  }

  update(description: string, dueDate: Date): void {
    this.description = description;
    this.dueDate = dueDate;
  }

  toString(): string {
    const status = this.completed ? "✓" : " ";
    const due = this.dueDate.toDateString();
    return `[${status}] ${this.id}: ${this.description} (Due: ${due})`;
  }
}

// TaskManager
class TaskManager {
  private tasks: Task[] = [];

  createTask(description: string, dueDate: Date): void {
    const task = new Task(description, dueDate);
    this.tasks.push(task);
    console.log(`Task added: ${task.toString()}`);
  }

  updateTask(id: number, description: string, dueDate: Date): void {
    const task = this.findTaskById(id);
    if (task) {
      task.update(description, dueDate);
      console.log(`Task updated: ${task.toString()}`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }

  completeTask(id: number): void {
    const task = this.findTaskById(id);
    if (task) {
      task.complete();
      console.log(`Task completed: ${task.toString()}`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }

  listTasks(): void {
    if (this.tasks.length === 0) {
      console.log("No tasks available.");
    } else {
      console.log("Task List:");
      this.tasks.forEach(task => console.log(task.toString()));
    }
  }

  private findTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }
}

// Example usage:
const manager = new TaskManager();

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

manager.createTask("Write TypeScript task manager", today);
manager.createTask("Test due date logic", tomorrow);
manager.updateTask(2, "Test due date thoroughly", tomorrow);
manager.completeTask(1);
manager.listTasks();


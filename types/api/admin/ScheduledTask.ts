export interface ScheduledTask {
  id: string;
  name: string;
  scheduledTaskClass: string;
  runInterval: number;
  defaultRunInterval: number;
  status: string;
  lastExecutionTime: string;
  nextExecutionTime: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
}

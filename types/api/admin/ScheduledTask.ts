export interface ScheduledTask {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly lastExecutionTime: string;
  readonly nextExecutionTime: string;
  status: string;
  name: string;
  scheduledTaskClass: string;
  runInterval: number;
  defaultRunInterval: number;
}

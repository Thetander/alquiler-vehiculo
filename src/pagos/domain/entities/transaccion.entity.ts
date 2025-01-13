import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transacciones')
export class Transaccion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  transactionId: string;

  @Column()
  intent: string;

  @Column()
  status: string;

  @Column()
  idPersona: number;

  @Column('timestamp')
  createTime: Date; // Cambiado a Date

  @Column('timestamp')
  updateTime: Date; // Cambiado a Date

  @Column()
  payerEmail: string;

  @Column()
  payerName: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;
}

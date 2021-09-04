import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<Promise<void>> {
    const specificationAlreadyExist =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExist) {
      throw new Error('Specification already exist');
    }

    await this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };

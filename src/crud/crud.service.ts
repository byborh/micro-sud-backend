import { Injectable } from '@nestjs/common'
import { UpdateCrudDto } from './dto/update-crud.dto'
import { AuthService } from '../auth/auth.service'
// import { InjectRepository } from '@nestjs/typeorm'
// import { Repository } from 'typeorm'
// import { Page } from '../entities/page.entity'
// import { Element } from '../entities/element.entity'

@Injectable()
export class CrudService {
  constructor(
    // @InjectRepository(Page)
    // private pageRepository: Repository<Page>,
    // @InjectRepository(Element)
    // private elementRepository: Repository<Element>,
    private readonly authService: AuthService
    ) {}

  private pages = {
    '1': {
      name: 'Accueil'
    },
    '2': {
      name: 'Produits'
    }
  }

  private contents = {
    "1": {
      "name": "Accueil",
      "elements": [
        {
          "id": 1,
          "type": "text",
          "order": 1,
          "content": "Texte d'introduction sur la page d'accueil"
        },
        {
          "id": 2,
          "type": "image",
          "order": 2,
          "url": "https://example.com/image.jpg",
          "caption": "Légende de l'image sur la page d'accueil"
        },
        {
          "id": 3,
          "type": "titleText",
          "order": 3,
          "title": "Titre de section",
          "text": "Contenu textuel de la section"
        }
      ]
    },
    "2": {
      "name": "Produits",
      "elements": [
        {
          "id": 4,
          "type": "text",
          "order": 1,
          "content": "Texte d'introduction sur la page 2"
        }
      ]
    }
  }

  getMain(token: string) {
    if(!this.authService.validateToken(token)) {
      return {
        message: "You are not admin"
      }
    }
    return this.pages
  }

  async getPage(id: string, token: string) {
    if(!this.authService.validateToken(token)) {
      return {
        message: "You are not admin"
      }
    }

    if(id in this.pages) {
      return this.contents[id];
    }
    return `This id is not in the database`;
    
    // const page = await this.pageRepository.findOne({
    //   where: { id: +id },
    //   relations: ['elements'],
    // })
    
    // if(page) {
    //   return page
    // }
    // return `This id is not in the database`;
  }

  async updatePage(id: number, updateCrudDto: UpdateCrudDto, token: string) {
    if(!this.authService.validateToken(token)) {
      return {
        message: "You are not admin"
      }
    }

    const pageId = id.toString();
    if(pageId in this.pages) {
      this.contents[pageId].name = updateCrudDto.name
      this.contents[pageId].elements = updateCrudDto.elements
      return this.contents[pageId];
    }
    return `This page is not in existant in the database`;

    // const page = await this.pageRepository.findOne({
    //   where: { id: id },
    //   relations: ['elements'],
    // })
    
    // if(page) {
    //   page.name = updateCrudDto.name
    //   page.elements = updateCrudDto.elements.map(element => {
    //     const newElement = new Element()
    //     newElement.id = element.id;
    //     newElement.type = element.type;
    //     newElement.order = element.order;
    //     newElement.content = element.content;
    //     newElement.title = element.title;
    //     newElement.caption = element.caption;
    //     newElement.page = page;
    //     return newElement
    //   })
    //   await this.pageRepository.save(page)
    //   return page
    // }
    // return `This page is not in existant in the database`;
  }
  
}

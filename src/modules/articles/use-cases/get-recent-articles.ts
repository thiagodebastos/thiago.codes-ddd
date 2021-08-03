import {Result} from "@/shared/core/result";
import {UseCase} from "@/shared/core/use-case";


type Response = Result<ArticleDetails[]>

export class GetRecentArticles implements UseCase<GetRecentArticlesRequestDTO, Promise<Response>> {
    private articleRepo: IArticleRepo;

    constructor(articleRepo: IArticleRepo){
        this.articleRepo = articleRepo;
    }

    public async execute (req: GetRecentArticlesRequestDTO): Promise<Response> {
        try {
            const articles = await this.articleRepo.getRecentArticles(req.offset);
            return Result.ok(ArticleDetails[]>(articles))
        } catch(error) {
            return new AppError.UnexpectedError(error)
        }
    }
}

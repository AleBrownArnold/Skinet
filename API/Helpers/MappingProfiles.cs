using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;
using Core.Entities.OrderAggregate;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(p => p.ProductBrand, opt => opt
                .MapFrom(src => src.ProductBrand.Name))
                .ForMember(p => p.ProductType, opt => opt
                .MapFrom(src => src.ProductType.Name))
                .ForMember(p => p.PictureUrl, opt => opt
                .MapFrom<ProductUrlResolver>());
            CreateMap<Core.Entities.Identity.Address, AddressDto>().ReverseMap();
            CreateMap<CustomerBasketDto, CustomerBasket>();
            CreateMap<BasketItemDto, BasketItem>();
            CreateMap<AddressDto, Core.Entities.OrderAggregate.Address>();
            CreateMap<Order, OrderToReturnDto>();
            CreateMap<OrderItem, OrderItemDto>();
        }
    }
}